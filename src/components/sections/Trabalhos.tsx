import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'

const workItems = [
  {
    id: 1,
    title: 'Congresso Brasileiro de Dermatologia',
    year: '2024',
    image: '/trabalho-congresso.webp',
  },
  {
    id: 2,
    title: 'Publicação em Revista Especializada',
    year: '2024',
    image: '/trabalho-revista.webp',
  },
  {
    id: 3,
    title: 'Apresentação de Caso Clínico',
    year: '2023',
    image: '/trabalho-caso-clinico.webp',
  },
]

export function Trabalhos() {
  return (
    <section id="trabalhos" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <AnimatedSection className="space-y-2">
          <SectionLabel>Produção Científica</SectionLabel>
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-[#95ABB2]">
            Trabalhos Apresentados
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {workItems.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.1}>
              <GlassCard className="p-0 overflow-hidden hover:scale-[1.02] transition-transform duration-200">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <p className="font-sora font-semibold text-base text-brand-dark leading-snug">
                    {item.title}
                  </p>
                  <p className="font-sora text-xs text-brand-gray">{item.year}</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
