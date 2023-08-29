import { Filters } from './Filters'

export function Header ({ changeFilters }){
  return (
    <header>
        <h1>Ecommerce</h1>        
        <Filters onChange={changeFilters} />
    </header>
  )
}
