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
        className="object-cover object-right md:object-center"
      />
      <div className="relative max-w-2xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 text-center space-y-5 shadow-2xl">
        <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-white leading-snug">
          Pronto para cuidar da sua pele, cabelo e unhas?
        </h2>
        <CTAButton
          href="https://api.whatsapp.com/send?phone=5532984775220&text=Ol%C3%A1!%20Vim%20do%20site%20do%20Dr.%20Matheus%20Nehrer%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20ele"
          variant="primary"
          className="mx-auto"
        >
          <MessageCircle size={16} />
          Agende uma consulta
        </CTAButton>
      </div>
    </section>
  )
}
