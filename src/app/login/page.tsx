'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

type Tab = 'login' | 'register'

export default function LoginPage() {
  const router = useRouter()
  const [tab, setTab] = useState<Tab>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
    } else {
      router.push('/')
      router.refresh()
    }
    setLoading(false)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    })

    if (error) {
      setError(error.message)
    } else {
      setMessage('Hesabınız oluşturuldu! E-postanızı doğrulayın.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="font-serif text-2xl font-black tracking-tighter text-black">
            LUXE CLOTHING
          </Link>
          <p className="text-[#45464d] text-[14px] mt-2 uppercase tracking-widest font-semibold">
            {tab === 'login' ? 'Hesabınıza giriş yapın' : 'Yeni hesap oluşturun'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#c6c6cd] mb-8">
          <button
            onClick={() => { setTab('login'); setError(''); setMessage('') }}
            className={`flex-1 py-3 text-[12px] font-semibold tracking-widest uppercase transition-colors ${
              tab === 'login'
                ? 'border-b-2 border-black text-black'
                : 'text-[#45464d] hover:text-black'
            }`}
          >
            Giriş Yap
          </button>
          <button
            onClick={() => { setTab('register'); setError(''); setMessage('') }}
            className={`flex-1 py-3 text-[12px] font-semibold tracking-widest uppercase transition-colors ${
              tab === 'register'
                ? 'border-b-2 border-black text-black'
                : 'text-[#45464d] hover:text-black'
            }`}
          >
            Kayıt Ol
          </button>
        </div>

        {/* Form */}
        <form onSubmit={tab === 'login' ? handleLogin : handleRegister} className="flex flex-col gap-5">
          {tab === 'register' && (
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase" htmlFor="fullName">
                Ad Soyad
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Adınız Soyadınız"
                className="w-full bg-transparent border border-[#c6c6cd] text-black text-[16px] py-3 px-4 focus:border-black outline-none transition-colors"
              />
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase" htmlFor="email">
              E-posta Adresi
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@email.com"
              className="w-full bg-transparent border border-[#c6c6cd] text-black text-[16px] py-3 px-4 focus:border-black outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <label className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase" htmlFor="password">
                Şifre
              </label>
              {tab === 'login' && (
                <button type="button" className="text-[12px] font-semibold text-[#0051d5] hover:underline">
                  Şifremi Unuttum
                </button>
              )}
            </div>
            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="En az 6 karakter"
              className="w-full bg-transparent border border-[#c6c6cd] text-black text-[16px] py-3 px-4 focus:border-black outline-none transition-colors"
            />
          </div>

          {error && (
            <p className="text-[#ba1a1a] text-[13px] font-semibold bg-[#ffdad6] px-4 py-3">
              {error}
            </p>
          )}

          {message && (
            <p className="text-[#0b6e31] text-[13px] font-semibold bg-[#d4edda] px-4 py-3">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white text-[12px] font-semibold tracking-widest uppercase py-4 hover:opacity-90 transition-opacity disabled:opacity-50 mt-2"
          >
            {loading ? 'Lütfen bekleyin...' : tab === 'login' ? 'Giriş Yap' : 'Hesap Oluştur'}
          </button>
        </form>

        <p className="text-center text-[12px] text-[#45464d] mt-8">
          {tab === 'login' ? 'Hesabınız yok mu? ' : 'Zaten hesabınız var mı? '}
          <button
            onClick={() => { setTab(tab === 'login' ? 'register' : 'login'); setError(''); setMessage('') }}
            className="text-[#0051d5] font-semibold hover:underline"
          >
            {tab === 'login' ? 'Kayıt Ol' : 'Giriş Yap'}
          </button>
        </p>
      </div>
    </div>
  )
}
