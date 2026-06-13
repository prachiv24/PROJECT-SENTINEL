import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind CSS classes dynamically without style conflicts.
 * @param {...import('clsx').ClassValue[]} inputs 
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}