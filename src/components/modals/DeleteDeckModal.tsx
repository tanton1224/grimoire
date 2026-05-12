'use client'

import { useState } from 'react'
import Modal from '@/components/Modal'
import { useStore } from '@/store/useStore'
import { Deck } from '@/types'

interface Props {
  deck: Deck
}

export default function DeleteDeckModal({ deck }: Props) {
  const deleteDeck = useStore((s) => s.deleteDeck)
  const [showModal, setShowModal] = useState(false)

  const handleDelete = async () => {
    const res = await fetch(`/api/decks/${deck.id}`, { method: 'DELETE' })
    if (res.ok) {
      deleteDeck(deck.id)
      setShowModal(false)
    }
  }

  return (
    <>
      <div
        className="px-3 py-1 bg-red-700 text-white rounded cursor-pointer hover:bg-red-800 text-sm"
        onClick={() => setShowModal(true)}
      >
        Delete Deck
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="flex flex-col items-center p-8 bg-grimoire-gold min-w-[280px]">
            <h3 className="text-grimoire-dark text-lg mb-2">Permanently delete deck?</h3>
            <div className="text-grimoire-dark mb-4">This cannot be undone.</div>
            <div className="flex gap-4">
              <div
                className="px-4 py-2 bg-red-700 text-white rounded cursor-pointer hover:bg-red-800"
                onClick={handleDelete}
              >
                Delete
              </div>
              <div
                className="px-4 py-2 bg-grimoire-dark text-grimoire-gold rounded cursor-pointer hover:bg-grimoire-hover"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
