import { Building2, Calendar, MapPin, Phone, Sparkles } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CTAButton } from '@/components/ui/CTAButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { clinics } from '@/data/clinics'

const clinicIcon: Record<string, React.ReactNode> = {
  dermacenter: <Building2 size={24} className="text-brand-blue" />,
  lessence: <Sparkles size={24} className="text-brand-blue" />,
}

export function Clinicas() {
  return (
    <section id="clinicas" className="bg-brand-off-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <AnimatedSection className="space-y-2">
          <SectionLabel>Atendimento</SectionLabel>
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-[#95ABB2]">
            Onde atendo
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {clinics.map((clinic, i) => (
            <AnimatedSection key={clinic.id} delay={i * 0.12}>
              <GlassCard variant="cream" className="p-8 space-y-5 hover:scale-[1.02] transition-transform duration-200">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/15 flex items-center justify-center">
                  {clinicIcon[clinic.id]}
                </div>
                <h3 className="font-beautique font-medium text-2xl text-brand-dark">
                  {clinic.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} className="text-brand-blue mt-0.5 shrink-0" />
                    <div>
                      <p className="font-sora font-light text-sm text-brand-dark/70">{clinic.address}</p>
                      <p className="font-sora font-light text-sm text-brand-dark/70">{clinic.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={14} className="text-brand-blue shrink-0" />
                    <p className="font-sora font-semibold text-sm text-brand-blue">{clinic.phone}</p>
                  </div>
                </div>
                <CTAButton href={clinic.bookingUrl} variant="primary" className="w-full justify-center">
                  <Calendar size={16} />
                  {clinic.bookingLabel}
                </CTAButton>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
