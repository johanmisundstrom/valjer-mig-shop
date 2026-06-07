import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import ProductList from './ProductList'
import ProductPage from './ProductPage'
import OmOss from './OmOss'
import Checkout from './Checkout'
import Cart from './Cart'
import Confirmation from './Confirmation'
import './App.css'

function App() {
  // varukorg sparas som en array av produkter
  const [varukorg, setVarukorg] = useState([])
  const [varukorgenÖppen, setVarukorgenÖppen] = useState(false)

  function läggTillProdukt(produkt) {
    setVarukorg(prev => {
      // kolla om samma produkt och variant redan finns i varukorgen
      const matchKey = p => p.id === produkt.id && p.variantId === produkt.variantId
      const finns = prev.find(matchKey)
      const läggTillAntal = produkt.antal || 1

      if (finns) {
        // om den finns, öka antalet
        return prev.map(p =>
          matchKey(p)
            ? { ...p, antal: (p.antal || 1) + läggTillAntal }
            : p
        )
      }
      // annars lägg till som ny rad
      return [...prev, { ...produkt, antal: läggTillAntal }]
    })
  }

  function taBortProdukt(index) {
    setVarukorg(prev => {
      const produkt = prev[index]
      // minska antalet om det finns mer än ett
      if ((produkt.antal || 1) > 1) {
        return prev.map((p, i) =>
          i === index ? { ...p, antal: p.antal - 1 } : p
        )
      }
      // annars ta bort produkten helt
      return prev.filter((_, i) => i !== index)
    })
  }

  // räkna ihop totalt antal varor för att visa i headern
  const antalVaror = varukorg.reduce((sum, p) => sum + (p.antal || 1), 0)

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          antalVaror={antalVaror}
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
        {/* visa varukorgen som en slide-in om den är öppen */}
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
