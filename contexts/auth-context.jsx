'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { authService } from '@/services/firebase'

const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = authService.getCurrentUser()
    setUser(storedUser)
    setIsLoading(false)
  }, [])

  const login = useCallback(async (email, password) => {
    setIsLoading(true)
    
    const result = await authService.login(email, password)
    
    if (result.success && result.user) {
      localStorage.setItem('carguard_user', JSON.stringify(result.user))
      setUser(result.user)
      setIsLoading(false)
      return { success: true }
    }
    
    setIsLoading(false)
    return { success: false, error: 'Invalid credentials' }
  }, [])

  const signup = useCallback(async (email, password, name) => {
    setIsLoading(true)
    
    // Mock signup - in production, this would call authService.signup
    const newUser = { email, name }
    localStorage.setItem('carguard_user', JSON.stringify(newUser))
    setUser(newUser)
    setIsLoading(false)
    return { success: true }
  }, [])

  const logout = useCallback(() => {
    authService.logout()
    localStorage.removeItem('carguard_user')
    setUser(null)
    router.push('/')
  }, [router])

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}