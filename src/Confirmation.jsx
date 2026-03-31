import { Link } from 'react-router-dom'
import './Confirmation.css'

function Confirmation() {
  return (
    <div className="confirmation">
      <div className="confirmation-icon">✓</div>
      <h1>Tack för din order!</h1>
      <p>Vi har tagit emot din beställning och återkommer med en orderbekräftelse via e-post.</p>
      <Link to="/" className="confirmation-button">Fortsätt shoppa</Link>
    </div>
  )
}

export default Confirmation