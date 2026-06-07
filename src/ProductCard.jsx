import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

// tar bort ordet "tshirt", "mugg" eller "mug" från produktnamnet
function formatNamn(namn) {
  return namn
    .replace(/ tshirt$/i, '')
    .replace(/ mugg$/i, '')
    .replace(/ mug$/i, '')
    .trim()
}

function ProductCard({ product, läggTill }) {
  const [tillagd, setTillagd] = useState(false)

  function hanteraKlick(e) {
    // stoppa så att klicket inte också navigerar till produktsidan
    e.stopPropagation()
    e.preventDefault()
    läggTill(product)
    setTillagd(true)
    // återställ knappen efter 1.5 sekunder
    setTimeout(() => setTillagd(false), 1500)
  }

  return (
    <Link to={`/produkt/${product.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-card-image">
          <img src={product.thumbnail_url || product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h2>{formatNamn(product.name)}</h2>
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
