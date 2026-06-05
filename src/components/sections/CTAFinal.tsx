import { MessageCircle } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function CTAFinal() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <PlaceholderImage
        label="FOTO 3 — Dr. Matheus ou consultório (ambiente)"
        aspectRatio="auto"
        className="absolute inset-0 w-full h-full rounded-none"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-cream/60" />

      <div className="relative max-w-lg mx-auto">
        <GlassCard className="p-10 text-center space-y-5 border-t-2 border-brand-blue/40 hover:scale-[1.02] transition-transform duration-200">
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-brand-dark leading-snug">
            Pronto para cuidar<br />da sua pele?
          </h2>
          <p className="font-sora font-light text-sm text-brand-dark/60 leading-relaxed">
            Agende sua consulta e receba um atendimento personalizado com foco em resultado natural.
          </p>
          <CTAButton
            href="https://api.whatsapp.com/send?phone=5532984775220"
            variant="primary"
            className="mx-auto"
          >
            <MessageCircle size={16} />
            Fale pelo WhatsApp
          </CTAButton>
        </GlassCard>
      </div>
    </section>
  )
}
