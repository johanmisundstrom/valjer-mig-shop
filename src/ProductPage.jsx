import { useParams } from 'react-router-dom'
import products from './products'
import './ProductPage.css'

function ProductPage({ läggTill }) {
  const { id } = useParams()
  const produkt = products.find(p => p.id === parseInt(id))

  if (!produkt) {
    return <p>Produkten hittades inte.</p>
  }

  return (
    <div className="product-page">
      <img src={produkt.image} alt={produkt.name} />
      <div className="product-page-info">
        <h1>{produkt.name}</h1>
        <p className="product-page-price">{produkt.price} kr</p>
        <p className="product-page-description">{produkt.description}</p>
        <button className="product-page-button" onClick={() => läggTill(produkt)}>
          Lägg i varukorg
        </button>
      </div>
    </div>
  )
}

export default ProductPage