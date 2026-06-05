import { ChevronDown, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { CTAButton } from '@/components/ui/CTAButton'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Hero() {
  return (
    <section className="relative w-full min-h-[520px] h-[90vh] max-h-[860px] overflow-hidden">

      {/* Background — desktop */}
      <Image
        src="/hero-desktop.webp"
        alt="Dr. Matheus Nehrer"
        fill
        className="object-cover hidden md:block"
        priority
      />
      {/* Background — mobile */}
      <Image
        src="/hero-mobile.webp"
        alt="Dr. Matheus Nehrer"
        fill
        className="object-cover md:hidden"
        priority
      />

      {/* Overlay apenas à esquerda */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-cream/88 via-brand-cream/50 to-transparent" />

      {/* Copy */}
      <div className="relative h-full flex items-center px-8 md:px-16 lg:px-24">
        <div className="space-y-6 max-w-md">
          <SectionLabel>Dermatologia com naturalidade</SectionLabel>

          <h1 className="font-sora font-extrabold text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-tight">
            Dr. Matheus<br />Nehrer
          </h1>

          <p className="font-sora font-light text-sm text-brand-dark/70 leading-relaxed">
            Especialista em Dermatologia Estética e Clínica · RQE 70655
          </p>

          <CTAButton href="https://api.whatsapp.com/send?phone=5532984775220" variant="primary">
            <MessageCircle size={16} />
            Agende pelo WhatsApp
          </CTAButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 pointer-events-none">
        <ChevronDown size={28} className="text-brand-blue/60 animate-bounce" />
      </div>

    </section>
  )
}
