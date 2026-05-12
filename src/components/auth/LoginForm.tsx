'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'

interface Props {
  onClose: () => void
}

export default function LoginForm({ onClose }: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await signIn('credentials', { email, password, redirect: false })
    if (result?.error) {
      setErrors(['Invalid email or password'])
    } else {
      onClose()
    }
  }

  return (
    <div className="flex flex-col items-center p-8 bg-grimoire-gold min-w-[320px]">
      <h1 className="text-grimoire-dark text-2xl mb-4">
        Welcome back to <span className="font-gothic">Grimoire</span>!
      </h1>
      {errors.map((e, i) => (
        <div key={i} className="text-red-600 text-sm mb-2">{e}</div>
      ))}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 rounded border border-grimoire-dark font-bonum text-base"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 rounded border border-grimoire-dark font-bonum text-base"
        />
        <button
          type="submit"
          className="bg-grimoire-dark text-grimoire-gold py-2 rounded cursor-pointer hover:bg-grimoire-hover font-bonum text-base"
        >
          Login
        </button>
      </form>
    </div>
  )
}
