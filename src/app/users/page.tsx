'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User } from '@/types'

export default function UsersListPage() {
  const { status } = useSession()
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/')
  }, [status, router])

  useEffect(() => {
    if (status !== 'authenticated') return
    fetch('/api/users').then((r) => r.json()).then((d) => setUsers(d.users))
  }, [status])

  if (status === 'loading') return null

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User List:</h1>
      <ul className="list-disc pl-6">
        {users.map((u) => (
          <li key={u.id}>
            <Link href={`/users/${u.id}`} className="text-blue-600 hover:underline">
              {u.username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
