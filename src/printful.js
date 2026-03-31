const API_KEY = import.meta.env.VITE_PRINTFUL_API_KEY
const STORE_ID = '17876242'

export async function hämtaProdukter() {
  const response = await fetch(`/api/store/products?store_id=${STORE_ID}`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  })
  const data = await response.json()
  console.log('Printful svar:', data)
  return data.result
}