'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSubmitted(false)
    // Demo: no real backend, just simulate delay
    try {
      await new Promise(resolve => setTimeout(resolve, 1200))
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      setError('Submission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="cf-name" className="text-green-100 font-medium block mb-1">
          Name
        </label>
        <Input
          id="cf-name"
          value={form.name}
          onChange={e => setForm(form => ({ ...form, name: e.target.value }))}
          className="bg-green-900/30 text-green-100"
          autoComplete="off"
          required
        />
      </div>
      <div>
        <label htmlFor="cf-email" className="text-green-100 font-medium block mb-1">
          Email
        </label>
        <Input
          id="cf-email"
          type="email"
          value={form.email}
          onChange={e => setForm(form => ({ ...form, email: e.target.value }))}
          className="bg-green-900/30 text-green-100"
          autoComplete="off"
          required
        />
      </div>
      <div>
        <label htmlFor="cf-message" className="text-green-100 font-medium block mb-1">
          Message
        </label>
        <Textarea
          id="cf-message"
          rows={4}
          value={form.message}
          onChange={e => setForm(form => ({ ...form, message: e.target.value }))}
          className="bg-green-900/30 text-green-100"
          required
        />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      {submitted && <p className="text-green-300 text-sm">Thank you for contacting us! We will get back to you soon.</p>}
      <Button type="submit" disabled={loading} className="bg-green-700 hover:bg-green-600">
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
