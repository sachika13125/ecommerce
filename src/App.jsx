import './App.css'
import { products as initialProducts } from './data/products.json'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { useState } from 'react'
import { SearchBarContainer } from './components/SearchBarContainer'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' ||
          product.category === filters.category 
        ) 
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <SearchBarContainer />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
