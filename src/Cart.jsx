import { useNavigate } from 'react-router-dom'
import './Cart.css'

function Cart({ varukorg, onClose, taBort }) {
  const navigate = useNavigate()
  const totalpris = varukorg.reduce((sum, produkt) => sum + (produkt.price || 0) * (produkt.antal || 1), 0)

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Din varukorg</h2>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        {varukorg.length === 0 ? (
          <p className="cart-empty">Din varukorg är tom</p>
        ) : (
          <>
            <div className="cart-items">
              {varukorg.map((produkt, index) => (
                <div key={index} className="cart-item">
                  <img src={produkt.thumbnail_url || produkt.image} alt={produkt.name} />
                  <div className="cart-item-info">
                    <p>{produkt.name}</p>
                    <p className="cart-item-price">{produkt.price ? `${produkt.price} kr` : ''}</p>
                    <p className="cart-item-antal">Antal: {produkt.antal || 1}</p>
                  </div>
                  <button 
                    className="cart-item-remove"
                    onClick={() => taBort(index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Totalt</span>
                <span>{totalpris > 0 ? `${totalpris} kr` : ''}</span>
              </div>
              <button 
                className="cart-checkout"
                onClick={() => {
                  onClose()
                  navigate('/order')
                }}
              >
                Gå till kassan
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart