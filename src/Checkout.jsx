import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Checkout.css'

function Checkout({ varukorg }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    namn: '',
    email: '',
    adress: '',
    postnummer: '',
    stad: ''
  })

  function hanteraInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function läggTillOrder(e) {
    e.preventDefault()
    navigate('/bekräftelse')
  }

  return (
    <div className="orderöversikt">
      <h1>Orderöversikt</h1>

      <div className="orderöversikt-innehåll">
        <div className="orderöversikt-produkter">
          <h2>Din order</h2>
          {varukorg.map((produkt, index) => (
            <div key={index} className="orderöversikt-produkt">
              <img src={produkt.thumbnail_url || produkt.image} alt={produkt.name} />
              <p>{produkt.name}</p>
            </div>
          ))}
        </div>

        <form className="orderöversikt-form" onSubmit={läggTillOrder}>
          <h2>Dina uppgifter</h2>
          <input name="namn" placeholder="Namn" value={formData.namn} onChange={hanteraInput} required />
          <input name="email" placeholder="E-post" value={formData.email} onChange={hanteraInput} required />
          <input name="adress" placeholder="Adress" value={formData.adress} onChange={hanteraInput} required />
          <input name="postnummer" placeholder="Postnummer" value={formData.postnummer} onChange={hanteraInput} required />
          <input name="stad" placeholder="Stad" value={formData.stad} onChange={hanteraInput} required />
          <button type="submit">Lägg till order</button>
        </form>
      </div>
    </div>
  )
}

export default Checkout