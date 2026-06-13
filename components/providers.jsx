'use client'

import { AuthProvider } from '@/contexts/auth-context'
// 👇 The 'import type { ReactNode }' statement has been completely removed!

export function Providers({ children }) {
  // 👇 No inline type definitions needed, just standard React props destructuring
  return <AuthProvider>{children}</AuthProvider>
}