import Link from 'next/link'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { type Procedure } from '@/data/procedures'

interface ProcedureContentProps {
  procedure: Procedure
}

export function ProcedureContent({ procedure }: ProcedureContentProps) {
  return (
    <section className="bg-brand-off-white py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        <nav className="flex items-center gap-2 font-sora text-sm flex-wrap">
          <Link href="/#procedimentos" className="inline-flex items-center gap-1 text-brand-blue hover:underline">
            <ArrowLeft size={14} />
            Início
          </Link>
          <ChevronRight size={14} className="text-brand-gray" />
          <span className="text-brand-gray">Procedimentos</span>
          <ChevronRight size={14} className="text-brand-gray" />
          <span className="text-brand-dark font-semibold">{procedure.name}</span>
        </nav>

        <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-start">
          <AnimatedSection>
            <GlassCard className="p-8 space-y-4">
              {procedure.fullDescription.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sora font-light text-base text-brand-dark/75 leading-[1.8]"
                >
                  {paragraph}
                </p>
              ))}
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <GlassCard variant="cream" className="overflow-hidden p-0">
              <PlaceholderImage
                label={`Foto do procedimento — ${procedure.name}`}
                aspectRatio="4/3"
                className="rounded-none"
              />
            </GlassCard>
          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}
