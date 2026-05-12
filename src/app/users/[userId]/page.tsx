'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useParams } from 'next/navigation'
import { User } from '@/types'

export default function UserDetailPage() {
  const { status } = useSession()
  const router = useRouter()
  const { userId } = useParams<{ userId: string }>()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/')
  }, [status, router])

  useEffect(() => {
    if (status !== 'authenticated' || !userId) return
    fetch(`/api/users/${userId}`).then((r) => r.json()).then(setUser)
  }, [status, userId])

  if (status === 'loading' || !user) return null

  return (
    <div className="p-8">
      <ul className="list-none space-y-2">
        <li><strong>User Id:</strong> {user.id}</li>
        <li><strong>Username:</strong> {user.username}</li>
        <li><strong>Email:</strong> {user.email}</li>
      </ul>
    </div>
  )
}
