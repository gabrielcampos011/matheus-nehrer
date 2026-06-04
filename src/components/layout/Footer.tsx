import Image from 'next/image'
import { Globe, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Procedimentos', href: '/#procedimentos' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'Clínicas', href: '/#clinicas' },
  { label: 'FAQ', href: '/#faq' },
]

const procedureLinks = [
  { label: 'Botox', href: '/procedimentos/botox' },
  { label: 'Bioestimuladores de Colágeno', href: '/procedimentos/bioestimuladores-de-colageno' },
  { label: 'Microagulhamento', href: '/procedimentos/microagulhamento' },
  { label: 'Acne', href: '/procedimentos/acne' },
  { label: 'Câncer de Pele', href: '/procedimentos/cancer-de-pele' },
]

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t-2 border-brand-blue/30">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-8">

          {/* Coluna 1 — Identidade */}
          <div className="space-y-5">
            <Image
              src="/logo.png"
              alt="Dr. Matheus Nehrer"
              width={160}
              height={36}
              className="h-7 w-auto object-contain brightness-0 invert opacity-80"
            />
            <div className="space-y-1">
              <p className="font-beautique text-brand-off-white text-lg font-light tracking-wide">
                Dr. Matheus Nehrer
              </p>
              <p className="font-sora text-xs tracking-widest uppercase text-brand-gray">
                Dermatologista · RQE 70655
              </p>
            </div>
            <p className="font-sora font-light text-sm text-brand-gray/70 leading-relaxed max-w-xs">
              Dermatologia com naturalidade. Ciência, tecnologia e um olhar refinado para sua pele.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full glass-dark flex items-center justify-center text-brand-blue hover:text-white hover:bg-brand-blue/30 transition-all"
              >
                <Globe size={16} />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full glass-dark flex items-center justify-center text-brand-blue hover:text-white hover:bg-brand-blue/30 transition-all"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div className="space-y-4">
            <p className="font-sora font-semibold text-[11px] uppercase tracking-[0.2em] text-brand-blue">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sora font-light text-sm text-brand-gray/70 hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Procedimentos */}
          <div className="space-y-4">
            <p className="font-sora font-semibold text-[11px] uppercase tracking-[0.2em] text-brand-blue">
              Procedimentos
            </p>
            <ul className="space-y-2.5">
              {procedureLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sora font-light text-sm text-brand-gray/70 hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — Contato */}
          <div className="space-y-4">
            <p className="font-sora font-semibold text-[11px] uppercase tracking-[0.2em] text-brand-blue">
              Contato
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sora font-light text-sm text-brand-gray/70 hover:text-brand-blue transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sora font-light text-sm text-brand-gray/70 hover:text-brand-blue transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li className="pt-1">
                <p className="font-sora font-semibold text-xs text-brand-off-white/40 uppercase tracking-wider mb-1.5">
                  Clínicas
                </p>
                <p className="font-sora font-light text-sm text-brand-gray/70">Dermacenter</p>
                <p className="font-sora font-light text-sm text-brand-gray/70">L&apos;Essence</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-gray/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sora text-[11px] text-brand-gray/50">
            © {new Date().getFullYear()} Dr. Matheus Nehrer · Todos os direitos reservados
          </p>
          <p className="font-sora text-[11px] text-brand-gray/40">
            CRM · RQE 70655
          </p>
        </div>

      </div>
    </footer>
  )
}
