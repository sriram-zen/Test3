'use client'
import { useState } from 'react'

export default function ReceiptLink() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')

  async function handleSend(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    // Demo: simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSent(true)
    } catch {
      setError('Failed to send receipt link.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSend} autoComplete="off">
      <label htmlFor="rcpt-email" className="block font-medium text-green-50">
        Email for secure receipt
      </label>
      <input
        id="rcpt-email"
        type="email"
        className="bg-green-900/30 text-green-100 px-3 py-2 rounded"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="you@email.com"
        required
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
      {sent && <p className="text-green-200 text-sm">Receipt link sent securely!</p>}
      <button
        type="submit"
        className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50 transition"
        disabled={loading || sent || !email}
      >
        {loading ? 'Sending...' : sent ? 'Sent!' : 'Send Receipt Link'}
      </button>
    </form>
  )
}
