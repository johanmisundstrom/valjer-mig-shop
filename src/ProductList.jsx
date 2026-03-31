import { useState, useEffect } from 'react'
import { hämtaProdukter } from './printful'
import ProductCard from './ProductCard'
import './ProductList.css'

function ProductList({ läggTill }) {
  const [products, setProducts] = useState([])
  const [laddar, setLaddar] = useState(true)

  useEffect(() => {
    hämtaProdukter()
      .then(data => {
        setProducts(data)
        setLaddar(false)
      })
      .catch(err => {
        console.error('Fel:', err)
        setLaddar(false)
      })
  }, [])

  if (laddar) {
    return <p>Laddar produkter...</p>
  }

  if (products.length === 0) {
    return <p>Inga produkter hittades.</p>
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} läggTill={läggTill} />
      ))}
    </div>
  )
}

export default ProductList