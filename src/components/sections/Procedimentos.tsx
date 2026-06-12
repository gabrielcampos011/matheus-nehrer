'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, Stethoscope, ArrowRight, MessageCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CTAButton } from '@/components/ui/CTAButton'
import { procedures, type Category } from '@/data/procedures'
import { cn } from '@/lib/utils'

const categories: Category[] = ['estetica', 'clinica', 'cirurgica', 'capilar']

const categoryTabLabels: Record<Category, string> = {
  estetica: 'Dermatologia estética',
  clinica: 'Dermatologia clínica',
  cirurgica: 'Dermatologia cirúrgica',
  capilar: 'Dermatologia capilar – tricologia',
}

const categoryDescriptions: Record<Category, string> = {
  estetica: 'Procedimentos modernos focados na qualidade da pele, firmeza e prevenção do envelhecimento. Tratamentos realizados com olhar criterioso para resultados naturais e sem excessos.',
  clinica: 'Diagnóstico, prevenção e tratamento de doenças que afetam a pele, os cabelos e as unhas. Cuidado integral para manter o equilíbrio e o funcionamento saudável do seu organismo.',
  cirurgica: 'Pequenos procedimentos realizados em consultório sob anestesia local, com foco em uma recuperação rápida. Unimos o rigor técnico à preocupação estética para remover lesões de forma segura e com o mínimo de marcas.',
  capilar: 'Investigação médica e tratamentos avançados para a queda de cabelo e disfunções do couro cabeludo. Através de diagnósticos precisos, devolvemos a densidade, a saúde e a autoestima aos seus fios.',
}


function ScalpelIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21L12 12" />
      <path d="M12 12L19 4" />
      <path d="M19 4L22 3L21 6L12 12" />
      <path d="M10 14L8 16" />
    </svg>
  )
}

function HairIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M7 3C7 3 5 9 7 14C9 19 7 22 7 22" />
      <path d="M12 2C12 2 12 9 12 14C12 19 12 22 12 22" />
      <path d="M17 3C17 3 19 9 17 14C15 19 17 22 17 22" />
    </svg>
  )
}

const categoryIcons: Record<Category, React.ReactNode> = {
  estetica: <Sparkles size={15} />,
  clinica: <Stethoscope size={15} />,
  cirurgica: <ScalpelIcon size={15} />,
  capilar: <HairIcon size={15} />,
}

export function Procedimentos() {
  const [activeCategory, setActiveCategory] = useState<Category>('estetica')
  const filtered = procedures.filter((p) => p.category === activeCategory)

  return (
    <section id="procedimentos" className="bg-gradient-to-b from-brand-off-white to-brand-blue/5 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        <AnimatedSection className="space-y-2">
          <SectionLabel>Procedimentos</SectionLabel>
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-[#95ABB2]">
            Como posso te ajudar
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'w-full inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-sora font-semibold text-xs whitespace-nowrap transition-all duration-200 text-white hover:bg-brand-orange',
                  activeCategory === cat
                    ? 'bg-brand-orange shadow-md'
                    : 'bg-brand-blue'
                )}
              >
                {categoryIcons[cat]}
                {categoryTabLabels[cat]}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection key={activeCategory} delay={0}>
          <p className="font-sora font-light text-sm text-brand-dark/70 leading-relaxed max-w-2xl">
            {categoryDescriptions[activeCategory]}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((procedure, i) => (
            <AnimatedSection key={procedure.slug} delay={i * 0.07}>
              <GlassCard className="p-6 flex flex-col gap-4 h-full group hover:scale-[1.02] transition-transform duration-200">
                <div className="space-y-2 flex-1">
                  <h3 className="font-beautique font-medium text-xl text-brand-dark">
                    {procedure.name}
                  </h3>
                  <p className="font-sora font-light text-sm text-brand-dark/60 leading-relaxed line-clamp-3">
                    {procedure.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/procedimentos/${procedure.slug}`}
                  className="inline-flex items-center gap-1.5 font-sora font-semibold text-sm text-brand-blue hover:text-brand-blue/70 transition-colors self-start group-hover:gap-2"
                >
                  Saiba mais <ArrowRight size={14} />
                </Link>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.1} className="flex justify-center pt-2">
          <CTAButton
            href="https://api.whatsapp.com/send?phone=5532984775220&text=Ol%C3%A1!%20Vim%20do%20site%20do%20Dr.%20Matheus%20Nehrer%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20ele"
            variant="primary"
          >
            <MessageCircle size={16} />
            Agende uma consulta
          </CTAButton>
        </AnimatedSection>

      </div>
    </section>
  )
}
