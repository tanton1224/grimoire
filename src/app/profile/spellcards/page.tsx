'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'
import EncyclopediaCard from '@/components/EncyclopediaCard'
import EditSpellcardModal from '@/components/modals/EditSpellcardModal'
import DeleteSpellcardModal from '@/components/modals/DeleteSpellcardModal'

export default function ProfileSpellcardsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { spellcards, setSpellcards } = useStore()
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/')
  }, [status, router])

  useEffect(() => {
    if (status !== 'authenticated') return
    fetch('/api/spellcards')
      .then((r) => r.json())
      .then(setSpellcards)
  }, [status, setSpellcards])

  if (status === 'loading') return null

  const userId = Number(session?.user?.id)
  const cards = Object.values(spellcards.homebrew)
    .filter((c) => c.userId === userId)
    .reverse()

  const filtered = cards.filter(
    (c) => query === '' || c.name.toLowerCase().includes(query.toLowerCase())
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
        Your Homebrew Spells:
      </h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a spell..."
        className="w-[64%] h-[50px] text-[18px] font-bonum rounded-[10px] mb-[30px] px-3"
      />
      <div className="w-[65%] flex flex-wrap justify-evenly p-[20px] mb-[40px] bg-grimoire-red rounded-[20px] shadow-[inset_0px_0px_15px_15px_#F3CB70,0px_15px_10px_rgba(0,0,0,0.7)] border border-grimoire-gold min-h-[100px]">
        {filtered.length === 0 ? (
          <div className="text-grimoire-gold">No cards yet! Go ahead and create some!</div>
        ) : (
          filtered.map((spell) => (
            <div key={spell.id} className="flex flex-col items-center mb-4">
              <div className="flex justify-around w-full mb-2 gap-2">
                <EditSpellcardModal spell={spell} />
                <DeleteSpellcardModal spell={spell} />
              </div>
              <EncyclopediaCard spell={spell} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
