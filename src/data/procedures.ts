export type Category = 'estetica' | 'clinica' | 'cirurgica' | 'capilar'

export const categoryLabels: Record<Category, string> = {
  estetica: 'Dermatologia Estética',
  clinica: 'Dermatologia Clínica',
  cirurgica: 'Dermatologia Cirúrgica',
  capilar: 'Dermatologia Capilar',
}

export type Procedure = {
  slug: string
  name: string
  category: Category
  shortDescription: string
  fullDescription: string
}

export const procedures: Procedure[] = [
  // ── ESTÉTICA ────────────────────────────────────────────────────────────────
  {
    slug: 'botox',
    name: 'Botox',
    category: 'estetica',
    shortDescription: 'Suaviza rugas de expressão e previne rugas estáticas com resultado natural e individualizado.',
    fullDescription: `A toxina botulínica é um dos tratamentos mais eficazes para suavizar rugas de expressão e prevenir rugas estáticas. Atua relaxando temporariamente músculos específicos, reduzindo marcas na testa, entre as sobrancelhas e ao redor dos olhos, sem comprometer a naturalidade das expressões.\n\nO objetivo não é transformar o rosto, mas preservar sua aparência descansada, leve e harmônica. Cada aplicação é planejada de forma individualizada para respeitar a anatomia e as características únicas de cada paciente.`,
  },
  {
    slug: 'bioestimuladores-de-colageno',
    name: 'Bioestimuladores de Colágeno',
    category: 'estetica',
    shortDescription: 'Estimula a produção natural de colágeno para mais firmeza e rejuvenescimento progressivo.',
    fullDescription: `Com o passar dos anos, a produção natural de colágeno diminui, levando à perda de firmeza e sustentação da pele. Os bioestimuladores atuam estimulando o organismo a produzir novo colágeno de forma gradual e natural.\n\nO tratamento promove melhora da flacidez facial e corporal, maior firmeza da pele e um rejuvenescimento progressivo, sem alterar os traços do rosto. Entre os mais utilizados estão Sculptra® e Radiesse®.`,
  },
  {
    slug: 'preenchedores',
    name: 'Preenchedores',
    category: 'estetica',
    shortDescription: 'Restaura volumes, melhora contornos e equilibra proporções faciais com elegância.',
    fullDescription: `Os preenchedores à base de ácido hialurônico permitem restaurar volumes perdidos, melhorar contornos faciais e equilibrar proporções de forma elegante e natural.\n\nO planejamento individualizado busca realçar pontos estratégicos da face, preservando a identidade e a beleza de cada paciente, sempre evitando excessos.`,
  },
  {
    slug: 'microagulhamento',
    name: 'Microagulhamento',
    category: 'estetica',
    shortDescription: 'Estimula a regeneração da pele, melhorando textura, cicatrizes, rugas e poros.',
    fullDescription: `O microagulhamento é um procedimento realizado com um dispositivo com microagulhas para estimular a regeneração da pele, promovendo uma textura mais uniforme e melhorando a aparência de cicatrizes, rugas e poros dilatados.\n\nO processo de microlesões controladas ativa os mecanismos naturais de reparo do organismo, resultando em pele mais firme, uniforme e luminosa ao longo das sessões.`,
  },
  {
    slug: 'mesoterapia',
    name: 'Mesoterapia',
    category: 'estetica',
    shortDescription: 'Aplicação de ativos diretamente na pele ou couro cabeludo para ação localizada e personalizada.',
    fullDescription: `A mesoterapia é um tratamento que consiste na aplicação de ativos selecionados diretamente na pele ou no couro cabeludo por meio de microinjeções, permitindo uma ação localizada e personalizada.\n\nNa dermatologia capilar, é utilizada como tratamento complementar para diferentes tipos de queda de cabelo, contribuindo para a saúde do couro cabeludo e estimulando o crescimento dos fios. Na dermatologia estética, pode ser incorporada a protocolos de rejuvenescimento e melhora da qualidade da pele.`,
  },
  {
    slug: 'peelings-quimicos',
    name: 'Peelings Químicos',
    category: 'estetica',
    shortDescription: 'Renovação controlada da pele para manchas, acne, textura irregular e sinais de envelhecimento.',
    fullDescription: `Os peelings químicos promovem uma renovação controlada da pele através da aplicação de substâncias específicas que estimulam a regeneração celular. Podem ser superficiais, médios ou profundos, de acordo com o objetivo.\n\nSão indicados para melhorar manchas, acne, textura irregular, poros dilatados e sinais de envelhecimento, proporcionando uma pele mais uniforme, luminosa e saudável.`,
  },
  // ── CLÍNICA ─────────────────────────────────────────────────────────────────
  {
    slug: 'acne',
    name: 'Acne',
    category: 'clinica',
    shortDescription: 'Tratamento individualizado para controlar a inflamação, prevenir lesões e minimizar sequelas.',
    fullDescription: `A acne é uma doença inflamatória que acomete os folículos pilossebáceos, podendo causar cravos, espinhas e, em alguns casos, cicatrizes permanentes.\n\nO tratamento individualizado permite controlar a inflamação, prevenir novas lesões e minimizar sequelas, contribuindo para a saúde e autoestima do paciente.`,
  },
  {
    slug: 'cancer-de-pele',
    name: 'Câncer de Pele',
    category: 'clinica',
    shortDescription: 'Diagnóstico precoce é fundamental para aumentar as chances de cura com tratamentos menos invasivos.',
    fullDescription: `O câncer de pele é o tipo de câncer mais frequente no Brasil. O diagnóstico precoce é fundamental para aumentar as chances de cura e permitir tratamentos menos invasivos.\n\nA avaliação dermatológica regular possibilita a identificação precoce de lesões suspeitas e o acompanhamento adequado de pintas e sinais.`,
  },
  {
    slug: 'psoriase',
    name: 'Psoríase',
    category: 'clinica',
    shortDescription: 'Doença inflamatória crônica com tratamentos modernos que permitem excelente controle dos sintomas.',
    fullDescription: `A psoríase é uma doença inflamatória crônica que provoca placas avermelhadas e descamativas na pele.\n\nEmbora não tenha cura definitiva, os tratamentos atuais permitem excelente controle da doença, reduzindo sintomas e melhorando significativamente a qualidade de vida.`,
  },
  {
    slug: 'dermatites',
    name: 'Dermatites',
    category: 'clinica',
    shortDescription: 'Condições inflamatórias da pele tratadas com identificação precisa da causa para máxima eficácia.',
    fullDescription: `As dermatites englobam diferentes condições inflamatórias da pele que podem causar vermelhidão, coceira, descamação e desconforto.\n\nA identificação da causa é fundamental para estabelecer um tratamento eficaz e restaurar a saúde da pele.`,
  },
  {
    slug: 'melasma',
    name: 'Melasma',
    category: 'clinica',
    shortDescription: 'Manchas escuras na face controladas com terapias específicas, fotoproteção e acompanhamento contínuo.',
    fullDescription: `O melasma é uma condição inflamatória da pele, caracterizada pelo surgimento de manchas escuras, principalmente na face.\n\nSeu tratamento envolve uma combinação de cuidados diários, fotoproteção rigorosa e terapias específicas para clarear as manchas e prevenir recidivas.`,
  },
  {
    slug: 'micoses',
    name: 'Micoses',
    category: 'clinica',
    shortDescription: 'Infecções fúngicas de pele, unhas e cabelos com diagnóstico correto para maior eficácia.',
    fullDescription: `As micoses são infecções causadas por fungos que podem acometer pele, unhas e cabelos.\n\nO diagnóstico correto permite definir o tratamento mais adequado, garantindo maior eficácia e reduzindo o risco de recorrências.`,
  },
  {
    slug: 'pitiriase-rosea',
    name: 'Pitiríase Rósea',
    category: 'clinica',
    shortDescription: 'Condição inflamatória temporária com acompanhamento médico para controle de sintomas.',
    fullDescription: `A pitiríase rósea é uma condição inflamatória temporária que provoca manchas avermelhadas e descamativas no tronco e membros.\n\nApesar de geralmente apresentar resolução espontânea, o acompanhamento médico auxilia no controle dos sintomas e no diagnóstico diferencial com outras doenças.`,
  },
  {
    slug: 'hiperidrose',
    name: 'Hiperidrose',
    category: 'clinica',
    shortDescription: 'Produção excessiva de suor tratada com métodos modernos que melhoram conforto e qualidade de vida.',
    fullDescription: `A hiperidrose é caracterizada pela produção excessiva de suor, frequentemente afetando axilas, mãos, pés ou rosto.\n\nExistem tratamentos modernos e eficazes que ajudam a controlar o quadro e melhorar significativamente o conforto e a qualidade de vida.`,
  },
  {
    slug: 'rosacea',
    name: 'Rosácea',
    category: 'clinica',
    shortDescription: 'Doença inflamatória crônica com tratamento adequado para controle de sintomas e prevenção da progressão.',
    fullDescription: `A rosácea é uma doença inflamatória crônica que causa vermelhidão facial, sensibilidade e, em alguns casos, vasos aparentes e lesões semelhantes à acne.\n\nO tratamento adequado permite controlar os sintomas e prevenir a progressão da doença.`,
  },
  // ── CIRÚRGICA ────────────────────────────────────────────────────────────────
  {
    slug: 'crioterapia',
    name: 'Crioterapia',
    category: 'cirurgica',
    shortDescription: 'Nitrogênio líquido para destruir lesões superficiais de forma rápida e minimamente invasiva.',
    fullDescription: `A crioterapia utiliza nitrogênio líquido para destruir lesões superficiais de forma rápida, segura e minimamente invasiva.\n\nÉ indicada para verrugas virais, ceratoses actínicas, ceratoses seborreicas superficiais e outras lesões benignas selecionadas.`,
  },
  {
    slug: 'eletrocoagulacao',
    name: 'Eletrocoagulação',
    category: 'cirurgica',
    shortDescription: 'Remoção precisa de lesões benignas com corrente elétrica controlada.',
    fullDescription: `Procedimento realizado com corrente elétrica controlada para remover lesões benignas da pele com precisão.\n\nFrequentemente utilizada para fibromas moles, hiperplasia sebácea, siringomas e pequenos angiomas.`,
  },
  {
    slug: 'curetagem',
    name: 'Curetagem',
    category: 'cirurgica',
    shortDescription: 'Remoção de lesões superficiais através de cureta cirúrgica específica.',
    fullDescription: `Técnica que consiste na remoção de lesões através de uma cureta cirúrgica específica.\n\nPode ser utilizada em verrugas, molusco contagioso, ceratoses seborreicas e algumas lesões superficiais selecionadas.`,
  },
  {
    slug: 'biopsia-de-pele',
    name: 'Biópsia de Pele',
    category: 'cirurgica',
    shortDescription: 'Retirada de amostra de pele para análise e diagnóstico preciso de condições dermatológicas.',
    fullDescription: `A biópsia de pele é um procedimento onde uma amostra de pele é retirada para análise, ajudando a diagnosticar diversas condições dermatológicas, como inflamações, infecções ou câncer de pele.\n\nO procedimento é realizado sob anestesia local com mínimo desconforto e recuperação rápida.`,
  },
  {
    slug: 'remocao-de-lesoes',
    name: 'Remoção de Lesões (Exérese)',
    category: 'cirurgica',
    shortDescription: 'Procedimento cirúrgico para retirada completa de lesões cutâneas com análise histopatológica.',
    fullDescription: `Procedimento cirúrgico realizado sob anestesia local para retirada completa de lesões cutâneas, permitindo análise histopatológica quando necessário.\n\nIndicado para nevos (pintas), cistos, lipomas e lesões suspeitas para câncer de pele.`,
  },
  // ── CAPILAR ──────────────────────────────────────────────────────────────────
  {
    slug: 'alopecia',
    name: 'Alopecia',
    category: 'capilar',
    shortDescription: 'Diagnóstico preciso do tipo de queda para definir a estratégia terapêutica mais adequada.',
    fullDescription: `A alopecia corresponde à perda parcial ou total dos cabelos por diferentes causas.\n\nO diagnóstico preciso é fundamental para identificar o tipo de alopecia e definir a estratégia terapêutica mais adequada.`,
  },
  {
    slug: 'calvicie',
    name: 'Calvície',
    category: 'capilar',
    shortDescription: 'Tratamento precoce para preservar os fios e retardar a progressão da calvície androgenética.',
    fullDescription: `A calvície é a forma mais comum de queda de cabelo em homens e mulheres, associada à predisposição genética e ação hormonal.\n\nO tratamento precoce ajuda a preservar os fios existentes e retardar a progressão da perda capilar.`,
  },
  {
    slug: 'alopecia-areata',
    name: 'Alopecia Areata',
    category: 'capilar',
    shortDescription: 'Perda autoimune de cabelo em placas com tratamento especializado para controle da progressão.',
    fullDescription: `É uma condição que causa a perda de cabelo em diferentes áreas do corpo, mais comum no couro cabeludo. Tem origem autoimune e pode surgir como pequenas placas sem cabelo no couro cabeludo, podendo evoluir causando queda de todos os pelos do corpo.`,
  },
  {
    slug: 'liquen-plano-pilar',
    name: 'Líquen Plano Pilar',
    category: 'capilar',
    shortDescription: 'Doença inflamatória crônica do couro cabeludo com acompanhamento essencial para preservar os fios.',
    fullDescription: `Doença inflamatória crônica que acomete o couro cabeludo e pode causar perda permanente dos fios quando não tratada precocemente.\n\nO acompanhamento especializado é essencial para controlar a inflamação e preservar os folículos pilosos.`,
  },
  {
    slug: 'alopecia-fibrosante-frontal',
    name: 'Alopecia Fibrosante Frontal',
    category: 'capilar',
    shortDescription: 'Queda autoimune que aumenta a testa e perde sobrancelhas — tratamento evita progressão.',
    fullDescription: `É um tipo de queda de cabelo autoimune que leva ao aumento da testa e perda das sobrancelhas. Acomete principalmente mulheres pós menopausa e necessita de tratamento com diferentes tipos de medicação para evitar a progressão e perda definitiva dos fios.`,
  },
  {
    slug: 'dermatite-seborreica',
    name: 'Dermatite Seborreica',
    category: 'capilar',
    shortDescription: 'Condição inflamatória com descamação e oleosidade do couro cabeludo controlada com tratamento adequado.',
    fullDescription: `Condição inflamatória comum que provoca descamação, oleosidade e coceira no couro cabeludo.\n\nO tratamento adequado controla os sintomas e reduz as crises recorrentes.`,
  },
]

export function getProcedureBySlug(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug)
}

export function getProceduresByCategory(category: Category): Procedure[] {
  return procedures.filter((p) => p.category === category)
}

export function getRelatedProcedures(slug: string, limit = 6): Procedure[] {
  const current = getProcedureBySlug(slug)
  if (!current) return []
  const sameCategory = procedures.filter(
    (p) => p.category === current.category && p.slug !== slug
  )
  const others = procedures.filter(
    (p) => p.category !== current.category && p.slug !== slug
  )
  return [...sameCategory, ...others].slice(0, limit)
}
