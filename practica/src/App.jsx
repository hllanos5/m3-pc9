import {  useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from '../hooks/useFilters.jsx'

function App() {
  const [products] = useState(initialProducts)
  const {filterProducts, setFilters} = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters = {setFilters}/>
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
