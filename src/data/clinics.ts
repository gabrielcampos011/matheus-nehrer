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
    address: 'Endereço a confirmar',
    city: 'Cidade — UF',
    phone: '(00) 0000-0000',
    bookingUrl: 'https://w.app/7inven',
    bookingLabel: 'Agendar na clínica Dermacenter',
  },
  {
    id: 'lessence',
    name: "L'Essence",
    address: 'Endereço a confirmar',
    city: 'Cidade — UF',
    phone: '(00) 0000-0000',
    bookingUrl: 'https://w.app/cenuqm',
    bookingLabel: "Agendar na L'Essence (Particular)",
  },
]
