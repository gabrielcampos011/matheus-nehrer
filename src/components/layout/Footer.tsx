import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

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
  { label: 'Preenchedores', href: '/procedimentos/preenchedores' },
  { label: 'Microagulhamento', href: '/procedimentos/microagulhamento' },
  { label: 'Mesoterapia', href: '/procedimentos/mesoterapia' },
  { label: 'Peelings Químicos', href: '/procedimentos/peelings-quimicos' },
]

export function Footer() {
  return (
    <footer className="bg-brand-blue border-t-2 border-white/15">
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
              <p className="font-beautique text-white text-lg font-light tracking-wide">
                Dr. Matheus Nehrer
              </p>
              <p className="font-sora text-xs tracking-widest uppercase text-white/60">
                Dermatologista - CRM MG 79986 | RQE 70655
              </p>
            </div>
            <p className="font-sora font-light text-sm text-white/70 leading-relaxed max-w-xs">
              Dermatologia com naturalidade. Ciência, tecnologia e um olhar refinado para sua pele.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              <a
                href="https://www.instagram.com/matheusnehrerdermato/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/25 transition-all"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5532984775220"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/25 transition-all"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div className="space-y-4">
            <p className="font-sora font-semibold text-[11px] uppercase tracking-[0.2em] text-white">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sora font-light text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Procedimentos */}
          <div className="space-y-4">
            <p className="font-sora font-semibold text-[11px] uppercase tracking-[0.2em] text-white">
              Procedimentos
            </p>
            <ul className="space-y-2.5">
              {procedureLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sora font-light text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — Contato */}
          <div className="space-y-4">
            <p className="font-sora font-semibold text-[11px] uppercase tracking-[0.2em] text-white">
              Contato
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5532984775220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sora font-light text-sm text-white/70 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/matheusnehrerdermato/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sora font-light text-sm text-white/70 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li className="pt-1">
                <p className="font-sora font-semibold text-xs text-white/40 uppercase tracking-wider mb-1.5">
                  Clínicas
                </p>
                <p className="font-sora font-light text-sm text-white/70">Dermacenter</p>
                <p className="font-sora font-light text-sm text-white/70">L&apos;Essence</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sora text-[11px] text-white/50">
            © {new Date().getFullYear()} Dr. Matheus Nehrer · Todos os direitos reservados
          </p>
          <p className="font-sora text-[11px] text-white/40">
            CRM MG 79986 | RQE 70655
          </p>
        </div>

      </div>
    </footer>
  )
}
