import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-off-white/70 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
        <Image
          src="/logo.png"
          alt="Dr. Matheus Nehrer"
          width={160}
          height={36}
          className="h-7 w-auto object-contain opacity-80 brightness-0 invert"
        />

        <div className="flex flex-col gap-1">
          <p className="font-beautique text-brand-off-white text-lg font-light tracking-wide">
            Dr. Matheus Nehrer
          </p>
          <p className="font-sora text-xs tracking-widest uppercase text-brand-gray">
            Dermatologista · RQE 70655
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sora text-sm text-brand-blue hover:text-brand-blue/80 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sora text-sm text-brand-blue hover:text-brand-blue/80 transition-colors"
          >
            WhatsApp
          </a>
        </div>

        <p className="font-sora text-[11px] text-brand-gray/60 mt-2">
          © {new Date().getFullYear()} Dr. Matheus Nehrer · Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
