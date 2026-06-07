import Image from 'next/image'
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

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="backdrop-blur-xl bg-white/20 border border-white/40 rounded-2xl shadow-lg px-10 py-7 space-y-1 text-center">
          <span className="font-sora font-semibold text-[11px] uppercase tracking-[0.2em] text-white/80">
            {categoryLabels[procedure.category]}
          </span>
          <h1 className="font-sora font-extrabold text-3xl md:text-4xl text-white">
            {procedure.name}
          </h1>
        </div>
      </div>
    </section>
  )
}
