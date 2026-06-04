'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { getRelatedProcedures } from '@/data/procedures'

interface ProcedureCarouselProps {
  currentSlug: string
}

export function ProcedureCarousel({ currentSlug }: ProcedureCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: false })
  const related = getRelatedProcedures(currentSlug, 8)

  return (
    <section className="bg-brand-cream py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <AnimatedSection className="space-y-1">
          <SectionLabel>Continue explorando</SectionLabel>
          <h2 className="font-beautique text-2xl md:text-3xl text-brand-dark">
            Outros procedimentos
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {related.map((procedure) => (
                <div
                  key={procedure.slug}
                  className="flex-none w-[75vw] sm:w-[40vw] lg:w-[28vw]"
                >
                  <GlassCard className="p-6 flex flex-col gap-4 h-full group hover:scale-[1.02] transition-transform duration-200">
                    <div className="space-y-2 flex-1">
                      <h3 className="font-beautique font-medium text-lg text-brand-dark">
                        {procedure.name}
                      </h3>
                      <p className="font-sora font-light text-xs text-brand-dark/60 leading-relaxed line-clamp-2">
                        {procedure.shortDescription}
                      </p>
                    </div>
                    <Link
                      href={`/procedimentos/${procedure.slug}`}
                      className="font-sora font-semibold text-sm text-brand-blue hover:text-brand-blue/70 transition-colors self-start"
                    >
                      Saiba mais →
                    </Link>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
