import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Checkout.css'

function Checkout({ varukorg }) {
  const navigate = useNavigate()

  // state för formulärfälten
  const [formData, setFormData] = useState({
    namn: '',
    email: '',
    adress: '',
    postnummer: '',
    stad: ''
  })

  // räkna ut totalpriset
  const totalpris = varukorg.reduce(
    (sum, p) => sum + (parseFloat(p.price) || 0) * (p.antal || 1),
    0
  )

  // uppdatera rätt fält när användaren skriver
  function hanteraInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // navigera till bekräftelsesidan när ordern läggs
  function läggTillOrder(e) {
    e.preventDefault()
    navigate('/bekräftelse')
  }

  // om varukorgen är tom, visa ett meddelande istället
  if (varukorg.length === 0) {
    return (
      <div className="orderöversikt">
        <h1>Orderöversikt</h1>
        <p style={{ color: '#888', marginTop: '32px' }}>Din varukorg är tom.</p>
      </div>
    )
  }

  return (
    <div className="orderöversikt">
      <h1>Orderöversikt</h1>

      <div className="orderöversikt-innehåll">

        {/* produktlista med pris */}
        <div className="orderöversikt-produkter">
          <h2>Din order</h2>
          {varukorg.map((produkt, index) => (
            <div key={index} className="orderöversikt-produkt">
              <img src={produkt.thumbnail_url || produkt.image} alt={produkt.name} />
              <div>
                <p>{produkt.name}</p>
                {produkt.size && (
                  <p className="orderöversikt-variant">{produkt.size}</p>
                )}
                <p className="orderöversikt-antal">Antal: {produkt.antal || 1}</p>
              </div>
              <p className="orderöversikt-pris">
                {((parseFloat(produkt.price) || 0) * (produkt.antal || 1)).toFixed(2)} kr
              </p>
            </div>
          ))}

          {/* totalpris */}
          <div className="orderöversikt-total">
            <span>Totalt</span>
            <span>{totalpris.toFixed(2)} kr</span>
          </div>
        </div>

        {/* formulär för personuppgifter */}
        <form className="orderöversikt-form" onSubmit={läggTillOrder}>
          <h2>Dina uppgifter</h2>
          <input name="namn" placeholder="Namn" value={formData.namn} onChange={hanteraInput} required />
          <input name="email" placeholder="E-post" type="email" value={formData.email} onChange={hanteraInput} required />
          <input name="adress" placeholder="Adress" value={formData.adress} onChange={hanteraInput} required />
          <input name="postnummer" placeholder="Postnummer" value={formData.postnummer} onChange={hanteraInput} required />
          <input name="stad" placeholder="Stad" value={formData.stad} onChange={hanteraInput} required />
          <button type="submit">Köp</button>
        </form>

      </div>
    </div>
  )
}

export default Checkout
