'use client'

import { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'

interface Props {
  onClose: () => void
}

export default function SignUpForm({ onClose }: Props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errors, setErrors] = useState<string[]>([])
  const [lengthErrors, setLengthErrors] = useState<Record<string, string>>({})

  const validateEmail = (e: string) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.toLowerCase())

  useEffect(() => {
    const errs: Record<string, string> = {}
    if (username.length >= 25) errs.username = 'Name character limit reached (25)'
    if (email.length >= 50) errs.email = 'Email character limit reached (50)'
    if (password.length >= 25) errs.password = 'Password character limit reached (25)'
    if (repeatPassword.length >= 25) errs.repeatPassword = 'Confirm Password character limit reached (25)'
    setLengthErrors(errs)
  }, [username, email, password, repeatPassword])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: string[] = []
    if (password !== repeatPassword) newErrors.push('Password and confirm password do not match!')
    if (!validateEmail(email)) newErrors.push('Please enter a valid email!')
    if (newErrors.length > 0) { setErrors(newErrors); return }
    setErrors([])

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    })
    const data = await res.json()
    if (!res.ok) { setErrors(data.errors ?? ['Sign up failed']); return }

    await signIn('credentials', { email, password, redirect: false })
    onClose()
  }

  const inputClass = 'p-2 rounded border border-grimoire-dark font-bonum text-base w-full'

  return (
    <div className="flex flex-col items-center p-8 bg-grimoire-gold min-w-[320px]">
      <h1 className="text-grimoire-dark text-2xl mb-4">
        Sign Up for <span className="font-gothic">Grimoire</span>!
      </h1>
      {errors.map((err, i) => (
        <div key={i} className="text-red-600 text-sm mb-1">{err}</div>
      ))}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} minLength={4} maxLength={25} required className={inputClass} />
        {lengthErrors.username && <div className="text-red-600 text-xs">{lengthErrors.username}</div>}
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={50} required className={inputClass} />
        {lengthErrors.email && <div className="text-red-600 text-xs">{lengthErrors.email}</div>}
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={4} maxLength={25} required className={inputClass} />
        {lengthErrors.password && <div className="text-red-600 text-xs">{lengthErrors.password}</div>}
        <input type="password" placeholder="Confirm Password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} minLength={4} maxLength={25} required className={inputClass} />
        {lengthErrors.repeatPassword && <div className="text-red-600 text-xs">{lengthErrors.repeatPassword}</div>}
        <button type="submit" className="mt-2 bg-grimoire-dark text-grimoire-gold py-2 rounded cursor-pointer hover:bg-grimoire-hover font-bonum text-base">
          Sign Up
        </button>
      </form>
    </div>
  )
}
