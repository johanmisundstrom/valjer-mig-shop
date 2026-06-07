import { useState, useEffect } from 'react'
import { hämtaProdukter } from './printful'
import ProductCard from './ProductCard'
import './ProductList.css'

function ProductList({ läggTill }) {
  const [products, setProducts] = useState([])
  const [laddar, setLaddar] = useState(true)
  const [sökterm, setSökterm] = useState('')
  const [filtreradeProducts, setFiltreradeProducts] = useState([])

  useEffect(() => {
    async function hämta() {
      try {
        const data = await hämtaProdukter()
        setProducts(data)
        setFiltreradeProducts(data)
      } catch (err) {
        console.error('Fel vid hämtning av produkter:', err)
      } finally {
        setLaddar(false)
      }
    }
    hämta()
  }, [])

  // debounce - väntar 300ms innan sökningen körs
  useEffect(() => {
    const timer = setTimeout(() => {
      const resultat = products.filter(p =>
        p.name.toLowerCase().includes(sökterm.toLowerCase())
      )
      setFiltreradeProducts(resultat)
    }, 300)

    return () => clearTimeout(timer)
  }, [sökterm, products])

  if (laddar) return <p className="product-list-status">Laddar produkter...</p>

  return (
    <div className="product-list-wrapper">
      <div className="hero">
        <p className="hero-tagline">För dig som alltid visste vem du var.</p>
        <h1 className="hero-titel">Väljer Mig.</h1>
      </div>
      <input
        className="sök-input"
        type="text"
        placeholder="Sök produkt..."
        value={sökterm}
        onChange={e => setSökterm(e.target.value)}
      />
      <div className="product-list">
        {filtreradeProducts.map(product => (
          <ProductCard key={product.id} product={product} läggTill={läggTill} />
        ))}
      </div>
    </div>
  )
}

export default ProductList