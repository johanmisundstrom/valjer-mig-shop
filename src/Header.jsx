import { Link } from 'react-router-dom'
import './Header.css'

// headern visas på alla sidor och innehåller navigering och varukorg
function Header({ antalVaror, öppnaVarukorg }) {
  return (
    <header className="header">
      <Link to="/" className="header-logo">Väljer Mig</Link>
      <nav className="header-nav">
        <Link to="/produkter">Produkter</Link>
        <Link to="/om-oss">Om oss</Link>
        {/* öppnar varukorgen som en slide-in */}
        <a href="#" className="varukorg-ikon" onClick={(e) => { e.preventDefault(); öppnaVarukorg() }}>
          🛍 {antalVaror > 0 && <span className="varukorg-badge">{antalVaror}</span>}
        </a>
      </nav>
    </header>
  )
}

export default Header
