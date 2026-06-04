'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { procedures, categoryLabels, type Category } from '@/data/procedures'
import { cn } from '@/lib/utils'

const categories: Category[] = ['estetica', 'clinica', 'cirurgica', 'capilar']

const categoryShortLabels: Record<Category, string> = {
  estetica: 'Estética',
  clinica: 'Clínica',
  cirurgica: 'Cirúrgica',
  capilar: 'Capilar',
}

export function Procedimentos() {
  const [activeCategory, setActiveCategory] = useState<Category>('estetica')
  const filtered = procedures.filter((p) => p.category === activeCategory)

  return (
    <section id="procedimentos" className="bg-brand-off-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        <AnimatedSection className="space-y-2">
          <SectionLabel>Procedimentos</SectionLabel>
          <h2 className="font-beautique text-3xl md:text-4xl text-brand-dark">
            {categoryLabels[activeCategory]}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass rounded-full p-1.5 inline-flex gap-1 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full font-sora font-semibold text-xs transition-all duration-200',
                  activeCategory === cat
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-brand-gray hover:text-brand-blue'
                )}
              >
                {categoryShortLabels[cat]}
              </button>
            ))}
          </div>
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
                  className="font-sora font-semibold text-sm text-brand-blue hover:text-brand-blue/70 transition-colors self-start"
                >
                  Saiba mais →
                </Link>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
