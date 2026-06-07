import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'

export function CTAFinal() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <Image
        src="/bg-cta-final.webp"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-cream/60" />

      <div className="relative max-w-lg mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 text-center space-y-5 shadow-2xl">
        <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-white leading-snug">
          Pronto para cuidar<br />da sua pele?
        </h2>
        <p className="font-sora font-light text-sm text-white/80 leading-relaxed">
          Agende sua consulta e receba um atendimento personalizado com foco em resultado natural.
        </p>
        <CTAButton
          href="https://api.whatsapp.com/send?phone=5532984775220"
          variant="primary"
          className="mx-auto"
        >
          <MessageCircle size={16} />
          Fale pelo WhatsApp
        </CTAButton>
      </div>
    </section>
  )
}
