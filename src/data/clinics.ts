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
    bookingUrl: 'https://api.whatsapp.com/send?phone=5532998129594&text=Ol%C3%A1!%20Vim%20do%20site%20do%20Dr.%20Matheus%20Nehrer%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20ele',
    bookingLabel: 'Agendar na clínica Dermacenter (planos)',
  },
  {
    id: 'lessence',
    name: "L'Essence",
    address: 'Ladeira Alexandre Leonel, 221 - loja 108 - São Mateus',
    city: 'Juiz de Fora - MG, 36033-240',
    phone: '(32) 99816-6555',
    bookingUrl: 'https://api.whatsapp.com/send?phone=5532984775220&text=Ol%C3%A1!%20Vim%20do%20site%20do%20Dr.%20Matheus%20Nehrer%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20ele',
    bookingLabel: "Agendar L'Essence (particular)",
  },
]
