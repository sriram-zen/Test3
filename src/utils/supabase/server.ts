import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export function createServerSupabaseClient() {
  return createServerComponentClient({
    cookies,
  })
}

// Simple encryption utility for sensitive data (demo: base64, replace with stronger in prod)
export function encryptSensitiveData(data: string): string {
  if (!data) return ''
  return Buffer.from(data, 'utf-8').toString('base64')
}

// Simple decryption utility (for demonstration)
export function decryptSensitiveData(encoded: string): string {
  if (!encoded) return ''
  return Buffer.from(encoded, 'base64').toString('utf-8')
}

// Audit log utility (stub)
export function logAuditEvent(event: string, details: Record<string, any>) {
  // In a real implementation, log to a secure database or external service.
  // Here, only a placeholder for compliance demonstration.
  // Example:
  // await supabase.from('audit_logs').insert([{ event, details, timestamp: new Date().toISOString() }])
  console.info(`[AUDIT] ${event}`, details)
}
