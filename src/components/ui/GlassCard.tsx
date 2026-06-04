import { cn } from '@/lib/utils'

type GlassVariant = 'default' | 'cream' | 'dark' | 'hero'

interface GlassCardProps {
  children: React.ReactNode
  variant?: GlassVariant
  className?: string
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const variantClass: Record<GlassVariant, string> = {
  default: 'glass',
  cream: 'glass-cream',
  dark: 'glass-dark',
  hero: 'glass-hero',
}

const roundedClass = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  '2xl': 'rounded-[2rem]',
}

export function GlassCard({
  children,
  variant = 'default',
  className,
  rounded = 'lg',
}: GlassCardProps) {
  return (
    <div className={cn(variantClass[variant], roundedClass[rounded], className)}>
      {children}
    </div>
  )
}
