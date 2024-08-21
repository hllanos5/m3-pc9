import React from 'react'
import { Filters } from './Filters.jsx'
import './Filters.css'
export function Header({}) {
  return (
    <header>
        <h1>React Shop</h1>
        <Filters/>
    </header>
  )
}
