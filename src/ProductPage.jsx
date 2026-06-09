import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { hämtaProdukt } from './printful'
import './ProductPage.css'

function ProductPage({ läggTill }) {
  // hämta produktens id från urlen
  const { id } = useParams()
  const [produkt, setProdukt] = useState(null)
  const [varianter, setVarianter] = useState([])
  const [valdVariant, setValdVariant] = useState(null)
  const [laddar, setLaddar] = useState(true)
  const [fel, setFel] = useState(null)
  const [antal, setAntal] = useState(1)
  const [tillagd, setTillagd] = useState(false)

  // produktbeskrivningar kopplade till produktnamn
  const beskrivningar = {
    'Main Character tshirt': 'Du vet redan att du är huvudpersonen i din egen story.',
    "Broke boys don't deserve no pussy tshirt": 'En påminnelse. En livsstil.',
    'Fuck around and find out tshirt': 'För dig som är trött på att vara snäll hela tiden.',
    'Que sera sera black tshirt': 'Det som händer, händer. Släpp taget, lev livet.'
  }

  // hämta produktdata från Printful när id ändras
  useEffect(() => {
    hämtaProdukt(id)
      .then(data => {
        setProdukt(data.sync_product)
        setVarianter(data.sync_variants || [])
        // sätt första varianten som vald från start
        setValdVariant(data.sync_variants?.[0] || null)
        setLaddar(false)
      })
      .catch(err => {
        console.error('Fel vid hämtning av produkt:', err)
        setFel('Kunde inte ladda produkten.')
        setLaddar(false)
      })
  }, [id])

  if (laddar) return <p className="product-page-status">Laddar produkt...</p>
  if (fel) return <p className="product-page-status">{fel}</p>
  if (!produkt) return <p className="product-page-status">Produkten hittades inte.</p>

  // hämta priset från den valda varianten
  const pris = valdVariant ? parseFloat(valdVariant.retail_price) : null

  function hanteraLäggTill() {
    // bygg ihop produktobjektet med pris, variant och antal
    const produktMedPris = {
      ...produkt,
      variantId: valdVariant?.id,
      size: valdVariant?.size,
      color: valdVariant?.color,
      price: pris,
      antal: antal
    }
    läggTill({ ...produktMedPris, antal })
    setTillagd(true)
    // återställ knappen efter 1.5 sekunder
    setTimeout(() => setTillagd(false), 1500)
  }

  return (
    <div className="product-page">
      <img src={produkt.thumbnail_url} alt={produkt.name} />
      <div className="product-page-info">
        <h1>{produkt.name}</h1>
        <p className="product-page-description">
          {Object.entries(beskrivningar).find(([key]) => key.toLowerCase() === produkt.name.toLowerCase())?.[1] || ''}
        </p>

        {/* visa dropdown om det finns flera varianter */}
        {varianter.length > 1 && (
          <div className="product-page-variants">
            <label htmlFor="variant-select">Välj variant:</label>
            <select
              id="variant-select"
              value={valdVariant?.id || ''}
              onChange={e => {
                const vald = varianter.find(v => String(v.id) === e.target.value)
                setValdVariant(vald || null)
              }}
            >
              {varianter.map(v => (
                <option key={v.id} value={v.id}>
                  {[v.size, v.color].filter(Boolean).join(' - ')}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* visa storlek/färg om det bara finns en variant */}
        {varianter.length === 1 && valdVariant && (
          <p className="product-page-storlek">
            {[valdVariant.size, valdVariant.color].filter(Boolean).join(' - ')}
          </p>
        )}

        {pris !== null && (
          <p className="product-page-pris">{pris.toFixed(2)} kr</p>
        )}

        {/* antal-väljare */}
        <div className="product-page-quantity">
          <button onClick={() => setAntal(a => Math.max(1, a - 1))}>-</button>
          <span>{antal}</span>
          <button onClick={() => setAntal(a => a + 1)}>+</button>
        </div>

        <button
          className={`product-page-button ${tillagd ? 'tillagd' : ''}`}
          onClick={hanteraLäggTill}
          disabled={!valdVariant}
        >
          {tillagd ? '✓ Tillagd!' : 'Lägg i varukorg'}
        </button>
      </div>
    </div>
  )
}

export default ProductPage
