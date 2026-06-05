import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const beautiqueDisplay = localFont({
  src: [
    { path: './fonts/BeautiqueDisplay-Regular.otf', weight: '400', style: 'normal' },
    { path: './fonts/BeautiqueDisplay-Italic.otf', weight: '400', style: 'italic' },
    { path: './fonts/BeautiqueDisplay-Light.otf', weight: '300', style: 'normal' },
    { path: './fonts/BeautiqueDisplay-Medium.otf', weight: '500', style: 'normal' },
  ],
  variable: '--font-beautique',
})

const sora = localFont({
  src: [
    { path: './fonts/Sora-Light.otf', weight: '300', style: 'normal' },
    { path: './fonts/Sora-Regular.otf', weight: '400', style: 'normal' },
    { path: './fonts/Sora-SemiBold.otf', weight: '600', style: 'normal' },
    { path: './fonts/Sora-Bold.otf', weight: '700', style: 'normal' },
    { path: './fonts/Sora-ExtraBold.otf', weight: '800', style: 'normal' },
  ],
  variable: '--font-sora',
})

export const metadata: Metadata = {
  title: 'Dr. Matheus Nehrer | Dermatologista',
  description: 'Dermatologia com naturalidade. Saúde com propósito.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${beautiqueDisplay.variable} ${sora.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
