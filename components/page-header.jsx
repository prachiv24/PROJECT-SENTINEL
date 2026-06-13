'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

// 👇 The 'interface PageHeaderProps' block is completely removed!

export function PageHeader({
  title,
  description,
  showBackButton = false,
  backHref,
  actions,
  className,
}) {
  const router = useRouter()

  const handleBack = () => {
    if (backHref) {
      router.push(backHref)
    } else {
      router.back()
    }
  }

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center gap-4">
        {showBackButton && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className="shrink-0 text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Go back</span>
          </Button>
        )}
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </div>
  )
}