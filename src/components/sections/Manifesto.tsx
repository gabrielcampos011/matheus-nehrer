import { MessageCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CTAButton } from '@/components/ui/CTAButton'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function Manifesto() {
  return (
    <section id="sobre" className="bg-brand-cream py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <AnimatedSection direction="left">
          <PlaceholderImage
            label="FOTO 2 — Dr. Matheus, retrato natural"
            aspectRatio="3/4"
            className="w-full max-w-sm mx-auto md:mx-0"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="space-y-6 border-l-4 border-brand-blue pl-8">
            <SectionLabel>Sobre</SectionLabel>
            <h2 className="font-beautique italic text-3xl md:text-4xl text-brand-dark leading-snug">
              Dermatologia com naturalidade.<br />Saúde com propósito.
            </h2>
            <p className="font-sora font-light text-base text-brand-dark/70 leading-relaxed">
              Acredito que a verdadeira dermatologia estética não transforma quem você é, mas ressalta a sua essência. Sua pele carrega sua história, meu objetivo é gerenciar o envelhecimento de forma inteligente, segura e sutil.
            </p>
            <p className="font-sora font-light text-base text-brand-dark/70 leading-relaxed">
              Combinando ciência médica, tecnologias e um olhar refinado, criaremos planos de tratamento sob medida para cuidar da saúde, da qualidade e da juventude da sua pele.
            </p>
            <CTAButton href="https://wa.me/5500000000000" variant="outline">
              <MessageCircle size={15} />
              Agende uma consulta
            </CTAButton>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
