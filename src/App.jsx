import './App.css'
import { products as initialProducts } from './data/products.json'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Products } from './components/Products'
import { Header } from './components/Header'

import { useState, useRef } from 'react'
import { SearchBarContainer } from './components/SearchBarContainer'
import { Cart } from './components/Cart'


function App() {


  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  const headerRef = useRef(null)

  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    search: ''
  });

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' ||
          product.category === filters.category 
        ) &&
        (
          filters.search === '' ||
          product.title.toLowerCase().includes(filters.search.toLowerCase())
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Nav />
      <Hero />
      <Header changeFilters={setFilters} 
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      headerRef={headerRef} />
      <SearchBarContainer products={products} />
      <Products products={filteredProducts}
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts} />
      <Cart allProducts={allProducts} total={total} headerRef={headerRef} />
      <Footer />
    </>
  )
}

export default App
