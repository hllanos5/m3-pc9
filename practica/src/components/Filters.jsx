import React, { useState } from 'react'

export function Filters({onChange}) {
    const [minPrice, setMinPrice] = useState(0);
    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value);
        onchange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChageCategory= (event) => {
        onchange(prevState => ({n
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor="price">Precio a partir de: </label>
                <input 
                type="range"
                id='price'
                min='0'
                max='1000' 
                onChange = {handleChageMinPrice} />
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="categoria">Categoria</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}
