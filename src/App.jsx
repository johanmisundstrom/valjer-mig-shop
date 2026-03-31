import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import ProductList from './ProductList'
import ProductPage from './ProductPage'
import OmOss from './OmOss'
import Checkout from './Checkout'
import Cart from './Cart'
import './App.css'
import Confirmation from './Confirmation'

function App() {
  const [varukorg, setVarukorg] = useState([])
  const [varukorgenÖppen, setVarukorgenÖppen] = useState(false)

  function läggTillProdukt(produkt) {
  setVarukorg(prev => {
    const finns = prev.find(p => p.id === produkt.id)
    if (finns) {
      return prev.map(p => 
        p.id === produkt.id 
          ? { ...p, antal: (p.antal || 1) + 1 }
          : p
      )
    }
    return [...prev, { ...produkt, antal: 1 }]
  })
}

  function taBortProdukt(index) {
  setVarukorg(prev => {
    const produkt = prev[index]
    if (produkt.antal > 1) {
      return prev.map((p, i) => 
        i === index ? { ...p, antal: p.antal - 1 } : p
      )
    }
    return prev.filter((_, i) => i !== index)
  })
}

  return (
    <BrowserRouter>
      <div className="app">
        <Header 
          antalVaror={varukorg.length} 
          öppnaVarukorg={() => setVarukorgenÖppen(true)} 
        />
        <Routes>
          <Route path="/" element={<ProductList läggTill={läggTillProdukt} />} />
          <Route path="/produkter" element={<ProductList läggTill={läggTillProdukt} />} />
          <Route path="/produkt/:id" element={<ProductPage läggTill={läggTillProdukt} />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/order" element={<Checkout varukorg={varukorg} />} />
          <Route path="/bekräftelse" element={<Confirmation />} />
        </Routes>
        {varukorgenÖppen && (
          <Cart 
            varukorg={varukorg} 
            onClose={() => setVarukorgenÖppen(false)}
            taBort={taBortProdukt}
          />
        )}
      </div>
    </BrowserRouter>
  )
}

export default App