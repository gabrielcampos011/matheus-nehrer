'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
          'fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300',
          scrolled ? 'shadow-sm' : ''
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" aria-label="Início">
            <Image
              src="/logo.png"
              alt="Dr. Matheus Nehrer"
              width={180}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </a>

          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menu"
            className="flex flex-col gap-1.5 p-2"
          >
            <span className="block w-6 h-0.5 bg-brand-blue transition-all" />
            <span className="block w-6 h-0.5 bg-brand-blue transition-all" />
            <span className="block w-4 h-0.5 bg-brand-blue transition-all" />
          </button>
        </div>
      </header>

      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-brand-dark/30 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      <nav
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-72 glass-nav flex flex-col pt-20 px-8 gap-2',
          'transition-transform duration-300',
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!drawerOpen}
      >
        <button
          onClick={() => setDrawerOpen(false)}
          className="absolute top-5 right-6 text-brand-blue text-2xl font-light"
          aria-label="Fechar menu"
        >
          ×
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

        <div onClick={handleLinkClick}>
          <CTAButton
            href="https://wa.me/5500000000000"
            variant="primary"
            className="mt-6 w-full justify-center"
            target="_blank"
          >
            Agende uma consulta
          </CTAButton>
        </div>
      </nav>
    </>
  )
}
