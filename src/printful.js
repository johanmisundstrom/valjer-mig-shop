const API_KEY = import.meta.env.VITE_PRINTFUL_API_KEY

export async function hämtaProdukter() {
  const response = await fetch('/api/store/products', {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  })
  const data = await response.json()
  return data.result
}