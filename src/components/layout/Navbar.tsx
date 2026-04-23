'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function Navbar() {
  const { user, signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:flex bg-white sticky top-0 z-50 border-b border-slate-200">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-serif font-black tracking-tighter text-slate-900">
              LUXE CLOTHING
            </Link>
            <ul className="flex gap-6">
              <li>
                <Link href="/products?category=men" className="font-serif tracking-tight text-sm uppercase font-medium text-slate-600 hover:text-slate-900 transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/products?category=sweats" className="font-serif tracking-tight text-sm uppercase font-medium text-slate-600 hover:text-slate-900 transition-colors">
                  Sweats
                </Link>
              </li>
              <li>
                <Link href="/products?category=collections" className="font-serif tracking-tight text-sm uppercase font-medium text-slate-600 hover:text-slate-900 transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/products?sort=new" className="font-serif tracking-tight text-sm uppercase font-medium text-slate-600 hover:text-slate-900 transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-6 text-[#0051d5]">
            <div className="relative hidden lg:block">
              <input
                className="bg-[#eff4ff] border-none rounded-full py-2 px-4 pl-10 text-sm focus:outline-none w-64"
                placeholder="Search..."
                type="text"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#45464d] text-[20px]">search</span>
            </div>
            <Link href="/cart" className="hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">shopping_bag</span>
            </Link>

            {user ? (
              <div className="flex items-center gap-3">
                <Link href="/admin" className="text-[11px] font-semibold tracking-widest uppercase text-[#45464d] hover:text-black transition-colors">
                  Admin
                </Link>
                <div className="w-px h-4 bg-[#c6c6cd]" />
                <button
                  onClick={handleSignOut}
                  className="text-[11px] font-semibold tracking-widest uppercase text-[#45464d] hover:text-black transition-colors"
                >
                  Çıkış
                </button>
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[11px] font-bold">
                  {user.email?.[0].toUpperCase()}
                </div>
              </div>
            ) : (
              <Link href="/login" className="hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined">person</span>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-4 bg-white border-b border-[#c6c6cd] sticky top-0 z-40">
        <Link href="/" className="text-2xl font-serif font-black tracking-tighter text-[#0b1c30]">
          LUXE
        </Link>
        <div className="flex gap-4">
          <button className="text-[#0b1c30]">
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link href="/cart" className="text-[#0b1c30]">
            <span className="material-symbols-outlined">shopping_bag</span>
          </Link>
          <Link href={user ? '/admin' : '/login'} className="text-[#0b1c30]">
            <span className="material-symbols-outlined">{user ? 'admin_panel_settings' : 'person'}</span>
          </Link>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden bg-white/90 backdrop-blur-md fixed bottom-0 w-full z-50 border-t border-slate-200 rounded-t-xl shadow-lg pb-safe">
        <div className="flex justify-around items-center px-4 py-3">
          <Link href="/" className="flex flex-col items-center justify-center text-[#0051d5] p-2 rounded-lg">
            <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="text-[10px] font-sans font-semibold uppercase tracking-widest">Home</span>
          </Link>
          <Link href="/products" className="flex flex-col items-center justify-center text-slate-400 p-2 rounded-lg">
            <span className="material-symbols-outlined mb-1">search</span>
            <span className="text-[10px] font-sans font-semibold uppercase tracking-widest">Browse</span>
          </Link>
          <Link href="/cart" className="flex flex-col items-center justify-center text-slate-400 p-2 rounded-lg relative">
            <span className="material-symbols-outlined mb-1">shopping_cart</span>
            <span className="text-[10px] font-sans font-semibold uppercase tracking-widest">Cart</span>
          </Link>
          <Link href={user ? '/admin' : '/login'} className="flex flex-col items-center justify-center text-slate-400 p-2 rounded-lg">
            <span className="material-symbols-outlined mb-1">person</span>
            <span className="text-[10px] font-sans font-semibold uppercase tracking-widest">
              {user ? 'Hesap' : 'Giriş'}
            </span>
          </Link>
        </div>
      </nav>
    </>
  )
}
