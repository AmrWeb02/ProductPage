import React, {useState, useContext} from 'react'
import { dataContext } from './DessertPage'
import data from './data.json'
const Confirm = () => {
  const {cartData, setCartData, amount, setAmount, totalPrice, setTotalPrice, visible, setVisible} = useContext(dataContext);
    const showList = cartData.map((item)=>{
      const product = data.find( (element)=> element.name === item.name);
      // console.log(product);
      return <div className='confirmed-content' key={item.name}>
        <img src={product.image.thumbnail} alt={product.name}/>
        <div className="thumbContent">
          <p>{item.name}</p>
          <div style={{paddingTop:"10px"}}>
          <span className='price'>{item.quantity}x</span>
          <span style={{color:"var(--rose300)"}}> @ ${item.price.toFixed(2)}</span>
          </div>
        </div>
        <span className="total-price">${(item.quantity * item.price).toFixed(2)}</span>
    </div>})
    const hideConfirmMenu = ()=>{
      setVisible(false);
      setTimeout(() => {
        setAmount(0);
        setTotalPrice(0);
        setCartData([]); 
      }, 300);

    }
  return (
    <>
    <div className={visible? "overlay show":"overlay hide"}>
        <div className="confirm-check">
            <img id="checkMark" src="./src/assets/images/icon-order-confirmed.svg" alt="green check mark"/>
            <h1>Order Confirmed</h1>
            <p>We hope you enjoyed your food</p>
            {showList}
            <div className="order-label-align confirmed-content">
              <span>Order Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="confirm-btn" onClick={hideConfirmMenu}>Start New Order</button>
        </div>
    </div>

    </>

  )
}

export default Confirm