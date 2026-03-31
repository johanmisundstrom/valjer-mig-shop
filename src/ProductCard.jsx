import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product, läggTill }) {
  const [tillagd, setTillagd] = useState(false)

  function hanteraKlick(e) {
    e.stopPropagation()
    läggTill(product)
    setTillagd(true)
    setTimeout(() => setTillagd(false), 1500)
  }

  return (
    <Link to={`/produkt/${product.id}`} className="product-card-link">
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="product-price">{product.price} kr</p>
          <button 
            className={`product-button ${tillagd ? 'tillagd' : ''}`}
            onClick={hanteraKlick}
          >
            {tillagd ? '✓ Tillagd!' : 'Lägg i varukorg'}
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard