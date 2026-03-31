import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ProductPage.css'

function ProductPage({ läggTill }) {
  const { id } = useParams()
  const [produkt, setProdukt] = useState(null)
  const [laddar, setLaddar] = useState(true)
  const [antal, setAntal] = useState(1)

  useEffect(() => {
    fetch(`/api/store/products/${id}?store_id=17876242`, {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_PRINTFUL_API_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setProdukt(data.result.sync_product)
        setLaddar(false)
      })
      .catch(err => {
        console.error('Fel:', err)
        setLaddar(false)
      })
  }, [id])

  if (laddar) return <p>Laddar produkt...</p>
  if (!produkt) return <p>Produkten hittades inte.</p>

  return (
    <div className="product-page">
      <img src={produkt.thumbnail_url} alt={produkt.name} />
      <div className="product-page-info">
        <h1>{produkt.name}</h1>
        <p className="product-page-description">Unik produkt från Väljer Mig</p>

        <div className="product-page-quantity">
          <button onClick={() => setAntal(a => Math.max(1, a - 1))}>−</button>
          <span>{antal}</span>
          <button onClick={() => setAntal(a => a + 1)}>+</button>
        </div>

        <button 
          className="product-page-button" 
          onClick={() => {
            for (let i = 0; i < antal; i++) {
              läggTill(produkt)
            }
          }}
        >
          Lägg i varukorg
        </button>
      </div>
    </div>
  )
}

export default ProductPage