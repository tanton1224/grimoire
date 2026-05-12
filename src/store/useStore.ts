import { create } from 'zustand'
import { Spellcard, Deck } from '@/types'

interface AppStore {
  spellcards: {
    encyclopedia: Record<number, Spellcard>
    homebrew: Record<number, Spellcard>
  }
  decks: Record<number, Deck>
  setSpellcards: (data: { encyclopedia: Spellcard[]; homebrew: Spellcard[] }) => void
  setDecks: (decks: Deck[]) => void
  upsertSpellcard: (spell: Spellcard) => void
  deleteSpellcard: (id: number) => void
  upsertDeck: (deck: Deck) => void
  deleteDeck: (id: number) => void
}

export const useStore = create<AppStore>((set) => ({
  spellcards: { encyclopedia: {}, homebrew: {} },
  decks: {},

  setSpellcards: (data) =>
    set({
      spellcards: {
        encyclopedia: Object.fromEntries(data.encyclopedia.map((s) => [s.id, s])),
        homebrew: Object.fromEntries(data.homebrew.map((s) => [s.id, s])),
      },
    }),

  setDecks: (decks) =>
    set({ decks: Object.fromEntries(decks.map((d) => [d.id, d])) }),

  upsertSpellcard: (spell) =>
    set((state) => ({
      spellcards: {
        ...state.spellcards,
        homebrew: { ...state.spellcards.homebrew, [spell.id]: spell },
      },
    })),

  deleteSpellcard: (id) =>
    set((state) => {
      const homebrew = { ...state.spellcards.homebrew }
      delete homebrew[id]
      return { spellcards: { ...state.spellcards, homebrew } }
    }),

  upsertDeck: (deck) =>
    set((state) => ({ decks: { ...state.decks, [deck.id]: deck } })),

  deleteDeck: (id) =>
    set((state) => {
      const decks = { ...state.decks }
      delete decks[id]
      return { decks }
    }),
}))
