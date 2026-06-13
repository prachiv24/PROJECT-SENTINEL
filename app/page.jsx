'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Loader2, Car, Shield, Eye, Lock, Mail } from 'lucide-react'
import { toast } from 'sonner'
import { useAuth } from '@/contexts/auth-context'

// Note: If @/components/ui/field does not exist, use standard HTML/Tailwind
export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await login(email, password)
      
      if (result?.success) {
        toast.success('Welcome back!', { description: 'Redirecting to dashboard...' })
        router.push('/dashboard')
      } else {
        toast.error('Login failed', { description: 'Please check your credentials.' })
      }
    } catch (error) {
      toast.error('An unexpected error occurred.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="relative z-10 flex flex-col justify-between p-12">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Car className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">CarGuard</h1>
              <p className="text-sm text-muted-foreground">Security System</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Advanced Vehicle Security</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                <Shield className="h-6 w-6 text-primary" />
                <p className="text-sm">Real-time intrusion detection</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                <Eye className="h-6 w-6 text-primary" />
                <p className="text-sm">Driver safety monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome back</CardTitle>
              <CardDescription>Enter your credentials to continue</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="email" placeholder="admin@carguard.io" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="password" placeholder="••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10" required minLength={6} />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" checked={rememberMe} onCheckedChange={setRememberMe} />
                    <label htmlFor="remember" className="text-sm">Remember me</label>
                  </div>
                  <Button type="button" variant="link" className="px-0 text-primary">Forgot password?</Button>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sign in'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}