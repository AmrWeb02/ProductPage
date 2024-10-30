import React, {useContext} from 'react'
import { dataContext } from './DessertPage';

const Cart = () => {
  const {cartData, setCartData, amount, setAmount, totalPrice, setTotalPrice, visible, setVisible} = useContext(dataContext);
  const instantRemove = (name)=>{
    const tempCartData = cartData.filter((element)=>{return element.name!==name});
    setCartData(tempCartData);
    cartData.forEach(element => {
      if(element.name===name){
        setAmount((prevState)=> prevState - element.quantity);
        setTotalPrice((prevPrice)=> prevPrice - (element.quantity* element.price))
      }
    });
  }
  console.log(cartData);
  const listitems = cartData.map( item => {return(
      <div className="cart-div" key={item.name}>
        <p>{item.name}</p>
        <button className="remove-btn" onClick={()=>{instantRemove(item.name)}}> &times; </button>
        <span>
        <span className="price">{item.quantity}x</span>
        <span> @ ${item.price.toFixed(2)}</span>
        <span> @ ${(item.price * item.quantity).toFixed(2)}</span>
        </span>
        {/* {`${item.quantity}x ${item.name} $${item.price} `} */}
        </div>
  )})
  const showConfirmMenu = ()=>{
    setVisible(true);
  }
  return (
    <>
      <div className="cart">
        <h1 className="price">Your Cart ({amount})</h1>
          {cartData.length===0 && <div style={{textAlign:"center"}}>
                                    <img src="./src/assets/images/illustration-empty-cart.svg" alt="Empty cart image"/>
                                    <p>Your added items will appear here</p>
                                  </div>}
          {cartData.length !==0 && <>
                                  {listitems}
                                  <div className="check">
                                    <p>Order Total</p> <span>${totalPrice.toFixed(2)}</span>
                                  </div>
                                    <div className="carbon">
                                      <img src="./src/assets/images/icon-carbon-neutral.svg" alt="carbon neutral image"/>
                                      <p>
                                      This is a <strong>carbon-neutral</strong> delivery
                                      </p>
                                    </div>
                                    <button className="confirm-btn" onClick={showConfirmMenu}>Confirm Order</button>
                                   </>}
      </div>

    </>
    // <div className="cart">{cartData[0].name}</div>
  )
}

export default Cart