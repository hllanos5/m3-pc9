import React from 'react'

export function Filters() {
  return (
    <section className='filters'>
        <div>
            <label htmlFor="price">Price</label>
            <input 
            type="range"
            id='price'
            min='0'
            max='1000' />
        </div>
        <div>
            <label htmlFor="categoria">Categoria</label>
            <select id="category">
                <option value="all">Todas</option>
                <option value="laptops">Portatiles</option>
                <option value="smartphones">Celulares</option>
            </select>
        </div>
    </section>
  )
}
