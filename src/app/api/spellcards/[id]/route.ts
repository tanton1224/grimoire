import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import prisma from '@/lib/prisma'

function formatSpellcard(s: {
  id: number; name: string; description: string; imageUrl: string; level: number
  range: string; verbal: boolean; somatic: boolean; material: string; ritual: boolean
  duration: string; concentration: boolean; castingTime: string; school: string
  classes: string; homebrew: boolean; userId: number | null
}) {
  return {
    ...s,
    classes: s.classes
      .split(',')
      .filter(Boolean)
      .map((c) => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()),
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const card = await prisma.spellcard.findUnique({ where: { id: Number(id) } })
  if (!card) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (card.userId !== Number(session.user.id)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await request.json()
  const {
    name, description, imageUrl, level, range, verbal, somatic, material,
    ritual, duration, concentration, castingTime, school, classes,
  } = body

  const updated = await prisma.spellcard.update({
    where: { id: Number(id) },
    data: {
      name,
      description,
      imageUrl,
      level: Number(level),
      range,
      verbal: Boolean(verbal),
      somatic: Boolean(somatic),
      material: material ?? '',
      ritual: Boolean(ritual),
      duration,
      concentration: Boolean(concentration),
      castingTime,
      school,
      classes: Array.isArray(classes) ? classes.join(',') : classes,
    },
  })

  return NextResponse.json(formatSpellcard(updated))
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const card = await prisma.spellcard.findUnique({ where: { id: Number(id) } })
  if (!card) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (card.userId !== Number(session.user.id)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  await prisma.spellcard.delete({ where: { id: Number(id) } })
  return NextResponse.json({ message: 'Successfully deleted' })
}
