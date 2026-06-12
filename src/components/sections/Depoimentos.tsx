'use client'

import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { testimonials } from '@/data/testimonials'

export function Depoimentos() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true, startDelay: 0 })]
  )

  return (
    <section id="depoimentos" className="bg-brand-blue py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        <AnimatedSection className="space-y-2">
          <SectionLabel light>Depoimentos</SectionLabel>
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-white">
            O que dizem os pacientes
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-none w-[72vw] sm:w-[38vw] lg:w-[25vw] pl-5"
                >
                  <GlassCard variant="dark" className="p-7 space-y-5 h-full hover:scale-[1.02] transition-transform duration-200">
                    <p className="font-beautique italic text-4xl text-white/40 leading-none">❝</p>
                    <p className="font-sora font-light text-sm text-white leading-relaxed">
                      {t.text}
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-10 h-10 rounded-full bg-brand-off-white/20 flex items-center justify-center text-xs text-white font-sora font-semibold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-sora font-semibold text-sm text-white">{t.name}</p>
                        <p className="text-sm text-[#FBBF24] tracking-wide">
                          {'★'.repeat(t.rating)}
                        </p>
                      </div>
                    </div>
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
