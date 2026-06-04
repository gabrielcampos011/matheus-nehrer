'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { cn } from '@/lib/utils'

const faqs = [
  {
    id: 1,
    question: 'Com que frequência devo fazer bioestimulador de colágeno (Sculptra®, Radiesse®)?',
    answer: 'A frequência varia de acordo com a idade, a qualidade da pele e os objetivos de cada paciente. Em geral, são realizadas de 1 a 3 sessões iniciais, com intervalo de algumas semanas entre elas. Após essa fase, costuma-se indicar uma sessão de manutenção anual ou semestral, conforme avaliação médica.',
  },
  {
    id: 2,
    question: 'Com que frequência devo fazer toxina botulínica (Botox®, Dysport®)?',
    answer: 'Os efeitos da toxina botulínica geralmente duram entre 3 e 6 meses, dependendo das características individuais e da área tratada. Por isso, a maioria dos pacientes realiza novas aplicações de duas a três vezes ao ano para manter os resultados.',
  },
  {
    id: 3,
    question: 'Toxina botulínica (Botox®, Dysport®) melhora rosácea?',
    answer: 'A toxina botulínica pode ajudar a reduzir a vermelhidão e os episódios de rubor (flush) associados à rosácea. O tratamento da rosácea geralmente envolve cuidados com a pele, controle dos gatilhos e medicamentos específicos.',
  },
  {
    id: 4,
    question: 'Toda verruga é igual?',
    answer: 'Não. Nem toda lesão popularmente chamada de "verruga" é realmente uma verruga. As verrugas verdadeiras são causadas pelo vírus HPV. Outras lesões como ceratose seborreica e fibromas moles são frequentemente confundidas. Por isso, é importante que qualquer lesão seja avaliada por um dermatologista.',
  },
  {
    id: 5,
    question: 'Qual a melhor época para fazer peeling?',
    answer: 'Os peelings costumam ser mais indicados durante os meses de menor exposição solar, como outono e inverno. Isso reduz o risco de manchas e facilita a recuperação da pele. Entretanto, alguns tipos de peeling superficial podem ser realizados em outras épocas do ano, desde que haja proteção solar adequada.',
  },
  {
    id: 6,
    question: 'Toda queda de cabelo é igual?',
    answer: 'Não. A queda de cabelo pode ter diversas causas: fatores genéticos, alterações hormonais, estresse, deficiências nutricionais, doenças do couro cabeludo, uso de medicamentos e condições autoimunes. Cada tipo exige uma investigação específica para que o tratamento seja direcionado à sua causa.',
  },
  {
    id: 7,
    question: 'Como prevenir o câncer de pele?',
    answer: 'A prevenção inclui o uso diário de protetor solar, evitar exposição excessiva ao sol entre 10h e 16h, e utilizar chapéus, óculos de sol e roupas com proteção UV. Consultas regulares com o dermatologista também são essenciais para o diagnóstico precoce.',
  },
  {
    id: 8,
    question: 'Melasma tem cura?',
    answer: 'O melasma é uma condição crônica. Embora não exista uma cura definitiva, é possível controlar as manchas e melhorar significativamente sua aparência com tratamentos adequados, proteção solar rigorosa e acompanhamento dermatológico contínuo.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={cn(
        'glass rounded-xl overflow-hidden cursor-pointer',
        'transition-all duration-200'
      )}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4 p-5">
        <p className="font-sora font-semibold text-sm text-brand-dark leading-snug">
          {question}
        </p>
        <ChevronDown
          size={18}
          className={cn(
            'text-brand-blue shrink-0 transition-transform duration-300',
            open ? 'rotate-180' : 'rotate-0'
          )}
        />
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="font-sora font-light text-sm text-brand-dark/60 leading-relaxed px-5 pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="bg-brand-cream py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <AnimatedSection className="space-y-2">
          <SectionLabel>Dúvidas</SectionLabel>
          <h2 className="font-beautique text-3xl md:text-4xl text-brand-dark">
            Perguntas frequentes
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={faq.id} delay={i * 0.05}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
