import React, { useState, createContext } from 'react'
import DessertList from './DessertList'
import Cart from './Cart'
import Confirm from './Confirm'

export const dataContext = createContext();
const DessertPage = () => {
  const [cartData, setCartData] = useState([]);
  const [amount, setAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [visible, setVisible] = useState(false);
  return (
    <>
    <div className="grid">
      <dataContext.Provider value={ {cartData, setCartData, amount, setAmount, totalPrice, setTotalPrice,visible, setVisible}}>
        <DessertList/>
        <Cart/>
        <Confirm/>
      </dataContext.Provider>
    </div>
    </>
  )
}

export default DessertPage