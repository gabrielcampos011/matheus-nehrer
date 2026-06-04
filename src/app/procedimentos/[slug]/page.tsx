import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { procedures, getProcedureBySlug } from '@/data/procedures'
import { ProcedureHero } from '@/components/procedure/ProcedureHero'
import { ProcedureContent } from '@/components/procedure/ProcedureContent'
import { ProcedureCTA } from '@/components/procedure/ProcedureCTA'
import { ProcedureCarousel } from '@/components/procedure/ProcedureCarousel'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return procedures.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const procedure = getProcedureBySlug(slug)
  if (!procedure) return {}
  return {
    title: `${procedure.name} | Dr. Matheus Nehrer`,
    description: procedure.shortDescription,
  }
}

export default async function ProcedurePage({ params }: Props) {
  const { slug } = await params
  const procedure = getProcedureBySlug(slug)
  if (!procedure) notFound()

  return (
    <main className="pt-16">
      <ProcedureHero procedure={procedure} />
      <ProcedureContent procedure={procedure} />
      <ProcedureCTA procedure={procedure} />
      <ProcedureCarousel currentSlug={slug} />
    </main>
  )
}
