import { CTAButton } from '@/components/ui/CTAButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function CTAFinal() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <PlaceholderImage
        label="FOTO 3 — Dr. Matheus ou consultório (ambiente)"
        aspectRatio="auto"
        className="absolute inset-0 w-full h-full rounded-none"
      />
      <div className="absolute inset-0 bg-brand-cream/50" />

      <div className="relative max-w-lg mx-auto">
        <GlassCard className="p-10 text-center space-y-5">
          <h2 className="font-beautique text-3xl md:text-4xl text-brand-dark leading-snug">
            Pronto para cuidar<br />da sua pele?
          </h2>
          <p className="font-sora font-light text-sm text-brand-dark/60">
            Agende sua consulta e receba um atendimento personalizado com foco em resultado natural.
          </p>
          <CTAButton
            href="https://wa.me/5500000000000"
            variant="primary"
            className="mx-auto"
          >
            Fale pelo WhatsApp →
          </CTAButton>
        </GlassCard>
      </div>
    </section>
  )
}
