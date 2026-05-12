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

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const decks = await prisma.deck.findMany()
  return NextResponse.json({ decks: decks.map(formatDeck) })
}

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { name } = await request.json()

  const deck = await prisma.deck.create({
    data: {
      userId: Number(session.user.id),
      name,
      spellcards: '',
    },
  })

  return NextResponse.json(formatDeck(deck))
}
