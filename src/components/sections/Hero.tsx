import { CTAButton } from '@/components/ui/CTAButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function Hero() {
  return (
    <section className="relative w-full h-dvh overflow-hidden">
      <PlaceholderImage
        label="FOTO 1 — Dr. Matheus, pose profissional"
        aspectRatio="auto"
        className="absolute inset-0 w-full h-full rounded-none"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/60 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        <GlassCard variant="hero" rounded="lg" className="max-w-lg p-8 md:p-10 space-y-4">
          <span className="font-sora font-semibold text-[11px] uppercase tracking-[0.2em] text-brand-blue">
            Dr. Matheus Nehrer
          </span>
          <h1 className="font-beautique font-light text-4xl md:text-5xl text-brand-dark leading-tight">
            Dermatologia com<br />naturalidade
          </h1>
          <CTAButton
            href="https://wa.me/5500000000000"
            variant="primary"
            className="mt-2"
          >
            Agende pelo WhatsApp →
          </CTAButton>
        </GlassCard>
      </div>
    </section>
  )
}
