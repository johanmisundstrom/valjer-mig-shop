import { Link } from 'react-router-dom'
import './Header.css'

function Header({ antalVaror, öppnaVarukorg }) {
  return (
    <header className="header">
      <Link to="/" className="header-logo">Väljer Mig</Link>
      <nav className="header-nav">
        <Link to="/">Hem</Link>
        <Link to="/produkter">Produkter</Link>
        <Link to="/om-oss">Om oss</Link>
        <a href="#" className="varukorg-ikon" onClick={öppnaVarukorg}>
          🛍️ {antalVaror > 0 && <span className="varukorg-badge">{antalVaror}</span>}
        </a>
      </nav>
    </header>
  )
}

export default Header