import React, { useContext } from 'react'
import { StoreContext } from '../../store'
const Topbar = () => {
    const context = useContext(StoreContext);
    const {USD, EUR} = context.rates;
  return (
    <div className="exchange-topbar">
        <ul>
            <li><h3>Exchange</h3></li>
            <li>
                <span>{ (1/USD).toFixed(2) } $</span> 
                <span>{ (1/EUR).toFixed(2) } €</span>
            </li>
        </ul>

        <h1></h1>
    </div>

  
  )
}
export default Topbar