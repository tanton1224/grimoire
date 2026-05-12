'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'
import EncyclopediaCard from '@/components/EncyclopediaCard'
import AddCardField from '@/components/AddCardField'
import RemoveCardModal from '@/components/modals/RemoveCardModal'

export default function ProfileDecksPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { spellcards, decks, setSpellcards, setDecks } = useStore()
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/')
  }, [status, router])

  useEffect(() => {
    if (status !== 'authenticated') return
    Promise.all([
      fetch('/api/decks').then((r) => r.json()),
      fetch('/api/spellcards').then((r) => r.json()),
    ]).then(([deckData, spellData]) => {
      setDecks(deckData.decks)
      setSpellcards(spellData)
    })
  }, [status, setDecks, setSpellcards])

  if (status === 'loading') return null

  const allSpells = { ...spellcards.encyclopedia, ...spellcards.homebrew }
  const userId = Number(session?.user?.id)

  const userDecks = Object.values(decks)
    .filter((d) => d.userId === userId)
    .reverse()

  const filteredDecks = userDecks.filter(
    (d) => query === '' || d.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div
      className="w-full flex flex-col items-center min-h-screen"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/premium-photo/old-brown-wood-background-made-dark-natural-wood-grunge-style-natural-raw-planed-texture-pine-surface-table-shoot-flat-lay-copy-space_113111-280.jpg?w=2000")',
        backgroundSize: 'contain',
      }}
    >
      <h1 className="font-cloister text-[100px] mt-[20px] mb-[30px] text-grimoire-gold [WebkitTextStroke:1px_black] [textShadow:0px_3px_3px_rgba(0,0,0,0.7)]">
        Your Decks:
      </h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a deck..."
        className="w-[64%] h-[50px] text-[18px] font-bonum rounded-[10px] mb-[30px] px-3"
      />

      {filteredDecks.length === 0 ? (
        <div className="w-[65%] h-[60px] flex justify-center items-center bg-grimoire-red rounded-[20px] shadow-[inset_0px_0px_15px_15px_#F3CB70,0px_15px_10px_rgba(0,0,0,0.7)] border border-grimoire-gold text-grimoire-gold">
          No decks yet! Go ahead and create some!
        </div>
      ) : (
        filteredDecks.map((deck) => (
          <div
            key={deck.id}
            className="w-[65%] flex flex-col px-[20px] pb-[20px] mb-[40px] bg-grimoire-red rounded-[20px] shadow-[inset_0px_0px_15px_15px_#F3CB70,0px_15px_10px_rgba(0,0,0,0.7)] border border-grimoire-gold"
          >
            <div className="flex justify-between items-center text-grimoire-gold">
              <h2>{deck.name}</h2>
              <h3>{deck.spellcards.length} cards</h3>
            </div>
            <AddCardField deck={deck} />
            {deck.spellcards.length === 0 ? (
              <div className="text-grimoire-gold">No cards yet! Go ahead and add some!</div>
            ) : (
              <div className="w-full flex flex-wrap justify-evenly">
                {deck.spellcards.map((cardId, index) => {
                  const spell = allSpells[Number(cardId)]
                  if (!spell) return null
                  return (
                    <div key={`${cardId}-${index}`} className="flex flex-col items-center">
                      <EncyclopediaCard spell={spell} />
                      <RemoveCardModal deck={deck} index={index} />
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  )
}
