import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import prisma from '@/lib/prisma'

function formatDeck(d: { id: number; userId: number; name: string; spellcards: string }) {
  return {
    id: d.id,
    userId: d.userId,
    name: d.name,
    spellcards: d.spellcards.split(',').filter(Boolean),
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
  const deck = await prisma.deck.findUnique({ where: { id: Number(id) } })
  if (!deck) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (deck.userId !== Number(session.user.id)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { name, spellcards } = await request.json()
  const spellcardsStr = Array.isArray(spellcards) ? spellcards.join(',') : (spellcards ?? '')

  const updated = await prisma.deck.update({
    where: { id: Number(id) },
    data: { name, spellcards: spellcardsStr },
  })

  return NextResponse.json(formatDeck(updated))
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
  const deck = await prisma.deck.findUnique({ where: { id: Number(id) } })
  if (!deck) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (deck.userId !== Number(session.user.id)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  await prisma.deck.delete({ where: { id: Number(id) } })
  return NextResponse.json({ message: 'Successfully deleted' })
}
