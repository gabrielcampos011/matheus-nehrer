import { ChevronDown, MessageCircle } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Hero() {
  return (
    <section className="relative w-full h-dvh overflow-hidden">
      <PlaceholderImage
        label="FOTO 1 — Dr. Matheus, pose profissional"
        aspectRatio="auto"
        className="absolute inset-0 w-full h-full rounded-none"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/70 via-brand-cream/10 to-transparent" />

      {/* Card principal */}
      <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-6 md:px-16 pb-20 md:pb-0">
        <GlassCard
          variant="hero"
          rounded="lg"
          className="max-w-xl p-8 md:p-10 space-y-5 border-l-4 border-brand-blue"
        >
          <SectionLabel>Dermatologia com naturalidade</SectionLabel>

          <h1 className="font-beautique font-light text-5xl md:text-6xl text-brand-dark leading-tight">
            Dr. Matheus<br />Nehrer
          </h1>

          <p className="font-sora font-light text-sm text-brand-dark/60 leading-relaxed">
            Especialista em Dermatologia Estética e Clínica · RQE 70655
          </p>

          <CTAButton href="https://wa.me/5500000000000" variant="primary">
            <MessageCircle size={16} />
            Agende pelo WhatsApp
          </CTAButton>
        </GlassCard>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
        <ChevronDown size={28} className="text-brand-blue/60 animate-bounce" />
      </div>
    </section>
  )
}
