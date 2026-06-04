import { Hero } from '@/components/sections/Hero'
import { Manifesto } from '@/components/sections/Manifesto'
import { Procedimentos } from '@/components/sections/Procedimentos'
import { Trabalhos } from '@/components/sections/Trabalhos'
import { Depoimentos } from '@/components/sections/Depoimentos'
import { Clinicas } from '@/components/sections/Clinicas'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Manifesto />
      <Procedimentos />
      <Trabalhos />
      <Depoimentos />
      <Clinicas />
      <FAQ />
      <CTAFinal />
    </main>
  )
}
