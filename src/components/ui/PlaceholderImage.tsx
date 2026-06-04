import { cn } from '@/lib/utils'

interface PlaceholderImageProps {
  label: string
  aspectRatio?: string
  className?: string
}

export function PlaceholderImage({
  label,
  aspectRatio = '4/3',
  className,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-2',
        'bg-brand-gray/20 border-2 border-dashed border-brand-blue/40',
        'rounded-xl',
        className
      )}
      style={{ aspectRatio }}
    >
      <span className="text-3xl">📷</span>
      <span className="font-sora text-xs text-brand-blue/70 text-center px-4 leading-relaxed">
        {label}
      </span>
    </div>
  )
}
