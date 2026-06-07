import Image from 'next/image'
import { GlassCard } from '@/components/ui/GlassCard'
import { categoryLabels, type Procedure } from '@/data/procedures'

interface ProcedureHeroProps {
  procedure: Procedure
}

export function ProcedureHero({ procedure }: ProcedureHeroProps) {
  return (
    <section className="relative h-[300px] overflow-hidden">
      <Image
        src="/bg-hero-internas.webp"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/70 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 px-6">
        <div className="max-w-6xl mx-auto">
          <GlassCard variant="hero" rounded="lg" className="px-8 py-6 inline-block space-y-1 rounded-b-none">
            <span className="font-sora font-semibold text-[11px] uppercase tracking-[0.2em] text-brand-blue">
              {categoryLabels[procedure.category]}
            </span>
            <h1 className="font-sora font-extrabold text-3xl md:text-4xl text-brand-dark">
              {procedure.name}
            </h1>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
