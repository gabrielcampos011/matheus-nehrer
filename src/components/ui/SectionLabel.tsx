import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
  className?: string
}

export function SectionLabel({ children, light = false, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'font-sora font-semibold text-[11px] uppercase tracking-[0.2em]',
        light ? 'text-brand-off-white/80' : 'text-brand-blue',
        className
      )}
    >
      {children}
    </span>
  )
}
