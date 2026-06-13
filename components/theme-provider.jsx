'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
// 👇 The 'type ThemeProviderProps' statement has been completely removed!

export function ThemeProvider({ children, ...props }) {
  // 👇 Explicit type reference removed from the parameters
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}