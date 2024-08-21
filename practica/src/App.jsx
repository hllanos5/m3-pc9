import { useState } from 'react'
import { Products } from './components/Products'
import { products} from './mocks/products.json'

function App() {

  return (
    <>
      <Products products={products}/>
    </>
  )
}

export default App
