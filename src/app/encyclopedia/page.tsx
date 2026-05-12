'use client'

import { useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'
import EncyclopediaCard from '@/components/EncyclopediaCard'
import Footer from '@/components/Footer'

export default function EncyclopediaPage() {
  const { spellcards, setSpellcards } = useStore()
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetch('/api/spellcards')
      .then((r) => r.json())
      .then(setSpellcards)
  }, [setSpellcards])

  const list = Object.values(spellcards.encyclopedia).filter(
    (s) => query === '' || s.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <div
        className="w-full flex flex-col items-center min-h-screen"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/old-brown-wood-background-made-dark-natural-wood-grunge-style-natural-raw-planed-texture-pine-surface-table-shoot-flat-lay-copy-space_113111-280.jpg?w=2000")',
          backgroundSize: 'contain',
        }}
      >
        <h1 className="font-cloister text-[100px] mt-[10px] mb-0 text-grimoire-gold [WebkitTextStroke:1px_black] [textShadow:0px_3px_3px_rgba(0,0,0,0.7)]">
          Encyclopedia
        </h1>
        <h2 className="text-grimoire-gold mt-0">Standard D&amp;D 5E Spells</h2>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a spell..."
          className="w-[64%] h-[50px] text-[18px] font-bonum rounded-[10px] mb-[30px] px-3"
        />
        <div className="w-[65%] flex justify-evenly flex-wrap">
          {list.map((spell) => (
            <EncyclopediaCard key={spell.id} spell={spell} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
