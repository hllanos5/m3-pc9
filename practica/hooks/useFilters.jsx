import { useContext } from "react";
import { FiltersContext } from "../context/filter";

export function useFilters(){
  
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