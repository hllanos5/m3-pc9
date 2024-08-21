import { useContext, useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config.js'
import { FiltersContext } from '../context/filter.jsx'

function useFilters(){
  
  const {filters, setFilters} = useContext(FiltersContext)
  console.log(filters);

  //Esto es para Juniors
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

  return { filterProducts, setFilters }
}

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
