"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signUp } from '@/src/actions/auth'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { encryptSensitiveData } from '@/utils/supabase/server'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!consent) {
      setError('You must agree to the Privacy Policy and Terms of Service to sign up.')
      return
    }
    setLoading(true)
    try {
      // Encrypt sensitive data before sending (demo: only email)
      const encryptedEmail = encryptSensitiveData(email)
      const res = await signUp({
        email: encryptedEmail,
        password,
      })
      if (res?.error) {
        setError(res.error.message || 'Sign up failed')
      } else {
        router.push('/protected')
      }
    } catch (err: any) {
      setError(err.message || 'Sign up failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col max-w-md mx-auto mt-20 p-6 bg-[#085347]/80 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-green-100 mb-6">Sign Up</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-green-50">
            Email
          </label>
          <Input
            id="email"
            type="email"
            autoComplete="off"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-green-900/30 text-green-100"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 font-medium text-green-50">
            Password
          </label>
          <Input
            id="password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="bg-green-900/30 text-green-100"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="privacy-consent"
            checked={consent}
            onCheckedChange={v => setConsent(!!v)}
            required
          />
          <label htmlFor="privacy-consent" className="text-green-50 text-sm select-none cursor-pointer">
            I agree to the{' '}
            <a
              href="/privacy"
              className="underline hover:text-green-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            {' '}and{' '}
            <a
              href="/terms"
              className="underline hover:text-green-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
            .
          </label>
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <Button type="submit" disabled={loading || !consent} className="bg-green-700 hover:bg-green-600">
          {loading ? 'Signing Up...' : 'Sign Up'}
        </Button>
      </form>
    </div>
  )
}
