'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CTAButton } from '@/components/ui/CTAButton'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Clínicas', href: '#clinicas' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setDrawerOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'bg-white/15 backdrop-blur-xl',
          'border-b border-white/20',
          'transition-all duration-300',
          scrolled ? 'shadow-sm' : ''
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" aria-label="Início" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Dr. Matheus Nehrer"
              width={180}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop — links de navegação */}
          <nav className="hidden min-[900px]:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sora font-medium text-sm text-[#57666b] hover:text-[#57666b]/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop — CTA */}
          <div className="hidden min-[900px]:block shrink-0">
            <CTAButton
              href="https://api.whatsapp.com/send?phone=5532984775220"
              variant="primary"
              className="text-xs px-4 py-2.5"
              target="_blank"
            >
              <MessageCircle size={14} />
              Agendar consulta
            </CTAButton>
          </div>

          {/* Mobile — hambúrguer */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menu"
            className="p-2 hover:opacity-70 transition-opacity min-[900px]:hidden"
          >
            <Menu size={22} className="text-brand-blue" />
          </button>

        </div>
      </header>

      {/* Overlay mobile */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-brand-dark/30 backdrop-blur-sm min-[900px]:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Offcanvas mobile */}
      <nav
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-72 min-[900px]:hidden',
          'bg-white/15 backdrop-blur-xl',
          'border-l border-white/20',
          'flex flex-col pt-20 px-8 gap-2',
          'transition-transform duration-300',
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!drawerOpen}
      >
        <button
          onClick={() => setDrawerOpen(false)}
          className="absolute top-5 right-6 p-1 hover:opacity-70 transition-opacity"
          aria-label="Fechar menu"
        >
          <X size={22} className="text-brand-blue" />
        </button>

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            className="font-sora font-semibold text-sm text-brand-dark hover:text-brand-blue py-3 border-b border-brand-gray/20 transition-colors"
          >
            {link.label}
          </a>
        ))}

        <div onClick={handleLinkClick} className="mt-6">
          <CTAButton
            href="https://api.whatsapp.com/send?phone=5532984775220"
            variant="primary"
            className="w-full justify-center"
            target="_blank"
          >
            <MessageCircle size={15} />
            Agende uma consulta
          </CTAButton>
        </div>
      </nav>
    </>
  )
}
