import { ChevronDown, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { CTAButton } from '@/components/ui/CTAButton'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Hero() {
  return (
    <section className="relative w-full min-h-[720px] min-[900px]:min-h-[520px] h-[90vh] max-h-[860px] overflow-hidden">

      {/* Background — desktop */}
      <Image
        src="/hero-desktop-v3.webp"
        alt="Dr. Matheus Nehrer"
        fill
        className="object-cover hidden min-[900px]:block"
        priority
      />
      {/* Background — mobile */}
      <Image
        src="/hero-mobile.webp"
        alt="Dr. Matheus Nehrer"
        fill
        className="object-cover min-[900px]:hidden"
        priority
      />

      {/* Copy */}
      <div className="relative h-full w-full flex items-start pt-16 min-[900px]:items-center min-[900px]:pt-0">
        <div className="w-full lg:max-w-[1000px] xl:max-w-[1100px] mx-auto px-6">
          <div className="space-y-6 max-w-md">
            <h1 className="font-sora font-extrabold text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight">
              Dr. Matheus Nehrer
            </h1>

            <p className="font-sora font-semibold text-xl md:text-2xl text-brand-blue tracking-wide">
              Dermatologia com naturalidade
            </p>

            <div className="font-sora font-light text-sm text-brand-dark/70 leading-relaxed space-y-0.5">
              <p>Médico Dermatologista | UFJF</p>
              <p>CRM MG 79986 | RQE 70655</p>
            </div>

            <CTAButton href="https://api.whatsapp.com/send?phone=5532984775220" variant="primary">
              <MessageCircle size={16} />
              Agende pelo WhatsApp
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 pointer-events-none">
        <ChevronDown size={28} className="text-brand-blue/60 animate-bounce" />
      </div>

    </section>
  )
}
