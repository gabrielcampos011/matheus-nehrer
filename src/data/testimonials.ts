export type Testimonial = {
  id: string
  name: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ana Carolina S.',
    text: 'O Dr. Matheus tem um olhar muito cuidadoso. Fiz o botox e o resultado ficou extremamente natural — exatamente o que eu queria. Me sinto muito mais confiante.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Rodrigo M.',
    text: 'Tratei minha acne por anos sem resultado. Depois de apenas dois meses de acompanhamento com o Dr. Matheus, a melhora foi incrível. Explicou cada etapa com clareza.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Fernanda L.',
    text: 'Fiz o bioestimulador de colágeno e fiquei surpresa com a melhora na firmeza da pele. Resultado gradual e natural, sem nenhum exagero. Super recomendo.',
    rating: 5,
  },
]
