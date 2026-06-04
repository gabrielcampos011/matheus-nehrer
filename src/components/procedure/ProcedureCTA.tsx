import { CTAButton } from '@/components/ui/CTAButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { type Procedure } from '@/data/procedures'

interface ProcedureCTAProps {
  procedure: Procedure
}

export function ProcedureCTA({ procedure }: ProcedureCTAProps) {
  return (
    <section className="bg-brand-blue py-16 px-6">
      <div className="max-w-lg mx-auto">
        <GlassCard variant="dark" className="p-10 text-center space-y-4">
          <h2 className="font-beautique text-2xl md:text-3xl text-white leading-snug">
            Tem interesse em {procedure.name}?<br />
            Agende sua avaliação.
          </h2>
          <p className="font-sora font-light text-sm text-brand-off-white/70">
            Atendimento personalizado e resultado natural.
          </p>
          <CTAButton
            href="https://wa.me/5500000000000"
            variant="ghost"
            className="mx-auto"
          >
            Agendar pelo WhatsApp →
          </CTAButton>
        </GlassCard>
      </div>
    </section>
  )
}
