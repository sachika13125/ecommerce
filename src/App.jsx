import './App.css'
import { products as initialProducts } from './data/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import { useState, useRef } from 'react'
import { SearchBarContainer } from './components/SearchBarContainer.jsx'
import { Cart } from './components/Cart.jsx'

function App() {

  const [showCart, setShowCart] = useState(false)
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  const headerRef = useRef(null)
  const cartRef = useRef(null)

  const [products] = useState(initialProducts)

  return (
    <>
      <Nav />
      <Hero />
      <Header /*changeFilters={setFilters}*/
      setShowCart={setShowCart}
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      headerRef={headerRef}
      cartRef={cartRef}/>
      <SearchBarContainer products={products} />
      <Products /*products={filteredProducts}*/
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      /*changeFilters={setFilters}*/ />
      {showCart && <Cart allProducts={allProducts} total={total} headerRef={headerRef} cartRef={cartRef} />}
      <Footer />
    </>
  )
}

export default App
