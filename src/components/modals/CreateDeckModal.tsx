'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Modal from '@/components/Modal'
import { useStore } from '@/store/useStore'

export default function CreateDeckModal() {
  const router = useRouter()
  const upsertDeck = useStore((s) => s.upsertDeck)
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (name.length >= 50) setErrors({ name: 'Name character limit reached (50)' })
    else setErrors({})
  }, [name])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/decks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })
    if (res.ok) {
      const deck = await res.json()
      upsertDeck(deck)
      setShowModal(false)
      setName('')
      router.push('/profile/decks')
    }
  }

  return (
    <>
      <div
        className="px-3 text-grimoire-gold cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        Create New Deck
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="flex flex-col items-center p-8 bg-grimoire-gold min-w-[320px]">
            <h2 className="text-grimoire-dark text-xl mb-4">Create new deck?</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
              <label className="text-grimoire-dark font-bold">Deck Name:</label>
              <input
                type="text"
                placeholder="Name goes here!"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                className="p-2 rounded border border-grimoire-dark font-bonum text-base"
              />
              {errors.name && <div className="text-red-600 text-sm">{errors.name}</div>}
              <button type="submit" className="bg-grimoire-dark text-grimoire-gold py-2 rounded cursor-pointer hover:bg-grimoire-hover font-bonum">
                Create
              </button>
            </form>
            <div
              className="mt-3 cursor-pointer text-grimoire-dark hover:underline"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
