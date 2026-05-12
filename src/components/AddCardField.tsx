'use client'

import { useState } from 'react'
import Select from 'react-select'
import { useStore } from '@/store/useStore'
import DeleteDeckModal from '@/components/modals/DeleteDeckModal'
import { Deck } from '@/types'

interface Props {
  deck: Deck
}

export default function AddCardField({ deck }: Props) {
  const { spellcards, upsertDeck } = useStore()
  const [chosenCard, setChosenCard] = useState<{ value: number; label: string } | null>(null)
  const [hasErrors, setHasErrors] = useState(false)

  const allSpells = [
    ...Object.values(spellcards.encyclopedia),
    ...Object.values(spellcards.homebrew),
  ]
  const options = allSpells.map((s) => ({ value: s.id, label: s.name }))

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!chosenCard) { setHasErrors(true); return }
    setHasErrors(false)

    const newCards = [...deck.spellcards, String(chosenCard.value)]
    const res = await fetch(`/api/decks/${deck.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: deck.name, spellcards: newCards }),
    })
    if (res.ok) {
      const updated = await res.json()
      upsertDeck(updated)
      setChosenCard(null)
    }
  }

  return (
    <form onSubmit={handleAdd} className="flex flex-col gap-2 mb-3">
      <Select
        value={chosenCard}
        placeholder="Select a card to add..."
        onChange={(v) => setChosenCard(v)}
        options={options}
        className="w-full"
      />
      {hasErrors && (
        <div className="text-red-400 text-sm">Must pick a card to add!</div>
      )}
      <div className="flex gap-3 items-center">
        <button type="submit" className="px-4 py-1 bg-grimoire-gold text-grimoire-dark rounded cursor-pointer hover:opacity-80 font-bonum text-sm">
          Add to deck
        </button>
        <DeleteDeckModal deck={deck} />
      </div>
    </form>
  )
}
