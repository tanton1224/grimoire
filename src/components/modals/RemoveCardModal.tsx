'use client'

import { useState } from 'react'
import Modal from '@/components/Modal'
import { useStore } from '@/store/useStore'
import { Deck } from '@/types'

interface Props {
  deck: Deck
  index: number
}

export default function RemoveCardModal({ deck, index }: Props) {
  const upsertDeck = useStore((s) => s.upsertDeck)
  const [showModal, setShowModal] = useState(false)

  const handleRemove = async () => {
    const newCards = deck.spellcards.filter((_, i) => i !== index)
    const res = await fetch(`/api/decks/${deck.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: deck.name, spellcards: newCards }),
    })
    if (res.ok) {
      const updated = await res.json()
      upsertDeck(updated)
      setShowModal(false)
    }
  }

  return (
    <>
      <div
        className="px-3 py-1 bg-red-700 text-white rounded cursor-pointer hover:bg-red-800 text-sm mt-1"
        onClick={() => setShowModal(true)}
      >
        Remove
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="flex flex-col items-center p-8 bg-grimoire-gold min-w-[280px]">
            <h3 className="text-grimoire-dark text-lg mb-4">Remove this card from your deck?</h3>
            <div className="flex gap-4">
              <div
                className="px-4 py-2 bg-red-700 text-white rounded cursor-pointer hover:bg-red-800"
                onClick={handleRemove}
              >
                Yes
              </div>
              <div
                className="px-4 py-2 bg-grimoire-dark text-grimoire-gold rounded cursor-pointer hover:bg-grimoire-hover"
                onClick={() => setShowModal(false)}
              >
                No
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
