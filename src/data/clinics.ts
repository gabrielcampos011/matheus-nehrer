export type Clinic = {
  id: string
  name: string
  address: string
  city: string
  phone: string
  bookingUrl: string
  bookingLabel: string
}

export const clinics: Clinic[] = [
  {
    id: 'dermacenter',
    name: 'Dermacenter',
    address: 'R. Prof. Benjamin Colucci, 130, 3º e 5º andar - Centro',
    city: 'Juiz de Fora - MG, 36010-600',
    phone: '(32) 3215-8087',
    bookingUrl: 'https://w.app/7inven',
    bookingLabel: 'Agendar na clínica Dermacenter',
  },
  {
    id: 'lessence',
    name: "L'Essence",
    address: 'Ladeira Alexandre Leonel, 221 - loja 108 - São Mateus',
    city: 'Juiz de Fora - MG, 36033-240',
    phone: '(32) 99816-6555',
    bookingUrl: 'https://w.app/cenuqm',
    bookingLabel: "Agendar na L'Essence (Particular)",
  },
]
