import { ExternalLink } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

type Publication = {
  type?: string
  title: string
  venue: string
  href?: string
}

const publications: Publication[] = [
  {
    type: 'Artigo',
    title: 'Síndrome DRESS associada a Atenolol: relato de caso e breve revisão de literatura',
    venue: 'Brazilian Journal of Health Review',
    href: 'https://ojs.brazilianjournals.com.br/ojs/index.php/BJHR/article/view/70348',
  },
  {
    type: 'Relato de caso',
    title: 'Nevo epidérmico verrucoso inflamatório linear: um tratamento desafiador',
    venue: '78º Congresso da Sociedade Brasileira de Dermatologia · 2025',
  },
  {
    type: 'Relato de caso',
    title: 'Pustulose exantemática generalizada aguda em paciente portador de psoríase vulgar: um relato de caso',
    venue: '78º Congresso da Sociedade Brasileira de Dermatologia · 2025',
  },
  {
    type: 'Relato de caso',
    title: 'Fibromixoma acral superficial em quirodáctilo simulando fibroqueratoma digital adquirido: um relato de caso',
    venue: '78º Congresso da Sociedade Brasileira de Dermatologia · 2025',
  },
  {
    type: 'Relato de caso',
    title: 'Melanoma amelanótico desmoplásico em paciente com vitiligo: um desafio diagnóstico e a importância da dermatoscopia',
    venue: '78º Congresso da Sociedade Brasileira de Dermatologia · 2025',
  },
  {
    title: 'Micose fungoide hipocromiante durante tratamento com tamoxifeno',
    venue: '77º Congresso da Sociedade Brasileira de Dermatologia · 2024',
  },
  {
    title: 'Líquen escleroso extragenital: apresentação inusitada',
    venue: '77º Congresso da Sociedade Brasileira de Dermatologia · 2024',
  },
  {
    title: 'Mastocitose cutânea maculopapular polimórfica: um relato de caso',
    venue: '77º Congresso da Sociedade Brasileira de Dermatologia · 2024',
  },
]

export function Trabalhos() {
  return (
    <section id="trabalhos" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10">

        <AnimatedSection className="space-y-2">
          <SectionLabel>Produção Científica</SectionLabel>
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-[#95ABB2]">
            Publicações e trabalhos apresentados
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {publications.map((pub, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="glass rounded-xl p-6 flex flex-col gap-3 h-full group hover:scale-[1.02] transition-transform duration-200">
                <div className="flex items-start justify-between gap-2">
                  {pub.type ? (
                    <span className="font-sora font-semibold text-[10px] uppercase tracking-[0.15em] text-brand-orange">
                      {pub.type}
                    </span>
                  ) : (
                    <span className="font-sora font-semibold text-[10px] uppercase tracking-[0.15em] text-brand-blue/60">
                      Congresso
                    </span>
                  )}
                  {pub.href && (
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver publicação"
                      className="shrink-0 text-brand-blue hover:text-brand-orange transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="font-sora font-semibold text-sm text-brand-dark leading-snug flex-1">
                  {pub.title}
                </p>
                <p className="font-sora font-light text-xs text-brand-dark/50">
                  {pub.venue}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
