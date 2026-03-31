import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import ProductList from './ProductList'
import ProductPage from './ProductPage'
import OmOss from './OmOss'
import Cart from './Cart'
import './App.css'

function App() {
  const [varukorg, setVarukorg] = useState([])
  const [varukorgenÖppen, setVarukorgenÖppen] = useState(false)

  function läggTillProdukt(produkt) {
    setVarukorg([...varukorg, produkt])
  }

  function taBortProdukt(index) {
    setVarukorg(varukorg.filter((_, i) => i !== index))
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