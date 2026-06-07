import { cn } from '@/lib/utils'

type CTAVariant = 'primary' | 'outline' | 'ghost'

interface CTAButtonProps {
  children: React.ReactNode
  href: string
  variant?: CTAVariant
  className?: string
  target?: '_blank' | '_self'
}

const variantStyles: Record<CTAVariant, string> = {
  primary: 'bg-brand-orange text-white hover:bg-brand-orange/90',
  outline: 'border border-brand-blue text-brand-blue hover:bg-brand-blue/10',
  ghost: 'bg-white text-brand-blue hover:bg-white/90',
}

export function CTAButton({
  children,
  href,
  variant = 'primary',
  className,
  target = '_blank',
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={cn(
        'inline-flex items-center gap-2 px-6 py-3 rounded-full font-sora font-semibold text-sm transition-all duration-200 hover:translate-y-1',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </a>
  )
}
