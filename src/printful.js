const API_KEY = import.meta.env.VITE_PRINTFUL_API_KEY
const STORE_ID = '17876242'

// headers skickas med varje anrop till Printful
const headers = {
  'Authorization': `Bearer ${API_KEY}`,
  'X-PF-Store-Id': STORE_ID
}

// hämtar alla produkter i butiken (id, namn, thumbnail)
export async function hämtaProdukter() {
  const response = await fetch('/api/store/products', { headers })
  const data = await response.json()
  return data.result
}

// hämtar en specifik produkt med varianter och priser
export async function hämtaProdukt(id) {
  const response = await fetch(`/api/store/products/${id}`, { headers })
  const data = await response.json()
  return data.result
}
