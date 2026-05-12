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
    id: s.id,
    name: s.name,
    description: s.description,
    imageUrl: s.imageUrl,
    level: s.level,
    range: s.range,
    verbal: s.verbal,
    somatic: s.somatic,
    material: s.material,
    ritual: s.ritual,
    duration: s.duration,
    concentration: s.concentration,
    castingTime: s.castingTime,
    school: s.school,
    classes: s.classes
      .split(',')
      .filter(Boolean)
      .map((c) => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()),
    homebrew: s.homebrew,
    userId: s.userId,
  }
}

export async function GET() {
  const [encyclopedia, homebrew] = await Promise.all([
    prisma.spellcard.findMany({ where: { homebrew: false } }),
    prisma.spellcard.findMany({ where: { homebrew: true } }),
  ])

  return NextResponse.json({
    encyclopedia: encyclopedia.map(formatSpellcard),
    homebrew: homebrew.map(formatSpellcard),
  })
}

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const {
    name, description, imageUrl, level, range, verbal, somatic, material,
    ritual, duration, concentration, castingTime, school, classes,
  } = body

  const card = await prisma.spellcard.create({
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
      homebrew: true,
      userId: Number(session.user.id),
    },
  })

  return NextResponse.json(formatSpellcard(card))
}
