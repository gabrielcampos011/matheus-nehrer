import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CTAButton } from '@/components/ui/CTAButton'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Manifesto() {
  return (
    <section id="sobre" className="bg-brand-blue py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <AnimatedSection direction="left">
          <Image
            src="/sobre.webp"
            alt="Dr. Matheus Nehrer"
            width={480}
            height={640}
            className="w-full max-w-sm mx-auto md:mx-0 rounded-2xl object-cover"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="space-y-6 border-l-4 border-white/30 pl-8">
            <SectionLabel className="text-white/70">Sobre</SectionLabel>
            <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-white leading-snug">
              Dermatologia com naturalidade.<br />Saúde com propósito.
            </h2>
            <p className="font-sora font-light text-base text-white/80 leading-relaxed">
              Acredito que a verdadeira dermatologia estética não transforma quem você é, mas ressalta a sua essência. Sua pele carrega sua história, meu objetivo é gerenciar o envelhecimento de forma inteligente, segura e sutil.
            </p>
            <p className="font-sora font-light text-base text-white/80 leading-relaxed">
              Combinando ciência médica, tecnologias e um olhar refinado, criaremos planos de tratamento sob medida para cuidar da saúde, da qualidade e da juventude da sua pele.
            </p>
            <CTAButton href="https://api.whatsapp.com/send?phone=5532984775220" variant="ghost">
              <MessageCircle size={15} />
              Agende uma consulta
            </CTAButton>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
