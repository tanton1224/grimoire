import type { Metadata } from 'next'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Grimoire',
  description: 'D&D Spell Deck Manager',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <SessionProvider>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
