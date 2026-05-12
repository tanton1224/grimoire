'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import LoginForm from '@/components/auth/LoginForm'
import SignUpForm from '@/components/auth/SignUpForm'
import Modal from '@/components/Modal'
import CreateDeckModal from '@/components/modals/CreateDeckModal'
import CreateSpellcardModal from '@/components/modals/CreateSpellcardModal'

export default function NavBar() {
  const { data: session } = useSession()
  const [showMenu, setShowMenu] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  const handleDemoLogin = () => {
    signIn('credentials', { email: 'demo@aa.io', password: 'password', redirect: false })
  }

  return (
    <nav className="h-[70px] flex sticky top-0 px-[150px] bg-grimoire-dark justify-between items-center shadow-[0px_6px_10px_rgba(0,0,0,0.5)] z-[3] border-b-2 border-black">
      <div className="font-gothic text-[30px] text-grimoire-gold">
        <Link href="/" className="text-grimoire-gold no-underline">Grimoire</Link>
      </div>

      <div className="flex items-center">
        <div className="flex items-center ml-5 h-[30px] rounded-[5px] cursor-pointer hover:bg-grimoire-hover px-2">
          <Link href="/encyclopedia" className="text-grimoire-gold no-underline">Encyclopedia</Link>
        </div>

        {session?.user ? (
          <>
            <div className="flex items-center ml-5 h-[30px] rounded-[5px] cursor-pointer hover:bg-grimoire-hover">
              <CreateDeckModal />
            </div>
            <div className="flex items-center ml-5 h-[30px] rounded-[5px] cursor-pointer hover:bg-grimoire-hover">
              <CreateSpellcardModal />
            </div>
            <div
              className="ml-5 flex items-center relative cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <i className="fa-solid fa-circle-user fa-2xl text-grimoire-gold" />
            </div>
            {showMenu && (
              <div
                className="fixed inset-0 bg-black/70 z-[-1]"
                onClick={() => setShowMenu(false)}
              >
                <div
                  className="absolute w-[240px] flex flex-col justify-evenly bg-grimoire-gold rounded-[10px] top-[4em] right-[9em] shadow-[0px_3px_3px_rgba(0,0,0,0.5)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="px-4 py-2 text-grimoire-dark">Welcome, {session.user.name}!</div>
                  <Link
                    href="/profile/decks"
                    onClick={() => setShowMenu(false)}
                    className="px-4 py-2 text-grimoire-dark hover:bg-[#d5af57] no-underline"
                  >
                    Your Decks
                  </Link>
                  <Link
                    href="/profile/spellcards"
                    onClick={() => setShowMenu(false)}
                    className="px-4 py-2 text-grimoire-dark hover:bg-[#d5af57] no-underline"
                  >
                    Your Homebrew Spellcards
                  </Link>
                  <div
                    className="px-4 py-2 text-grimoire-dark cursor-pointer hover:bg-[#d5af57]"
                    onClick={() => { signOut({ redirect: false }); setShowMenu(false) }}
                  >
                    Logout
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div
              className="ml-5 px-3 text-grimoire-gold cursor-pointer hover:bg-grimoire-hover h-[30px] flex items-center rounded"
              onClick={handleDemoLogin}
            >
              Demo Login
            </div>
            <div
              className="ml-5 px-3 text-grimoire-gold cursor-pointer hover:bg-grimoire-hover h-[30px] flex items-center rounded"
              onClick={() => setShowLogin(true)}
            >
              Login
            </div>
            <div
              className="ml-5 px-3 text-grimoire-gold cursor-pointer hover:bg-grimoire-hover h-[30px] flex items-center rounded"
              onClick={() => setShowSignUp(true)}
            >
              Sign Up
            </div>
          </>
        )}
      </div>

      {showLogin && (
        <Modal onClose={() => setShowLogin(false)}>
          <LoginForm onClose={() => setShowLogin(false)} />
        </Modal>
      )}
      {showSignUp && (
        <Modal onClose={() => setShowSignUp(false)}>
          <SignUpForm onClose={() => setShowSignUp(false)} />
        </Modal>
      )}
    </nav>
  )
}
