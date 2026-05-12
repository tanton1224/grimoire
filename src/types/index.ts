export interface User {
  id: number
  username: string
  email: string
  profileImageUrl?: string | null
}

export interface Spellcard {
  id: number
  name: string
  description: string
  imageUrl: string
  level: number
  range: string
  verbal: boolean
  somatic: boolean
  material: string
  ritual: boolean
  duration: string
  concentration: boolean
  castingTime: string
  school: string
  classes: string[]
  homebrew: boolean
  userId?: number | null
}

export interface Deck {
  id: number
  userId: number
  name: string
  spellcards: string[]
}
