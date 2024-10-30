import React, {useContext} from 'react'
import { dataContext } from './DessertPage';
const CartButton = ({name,price}) => {

  /* The cartData is an array of objects that holds your cart information {name,price,quantity}
  E.g. [{name:"cake", price:5, quantity:1}, {name:"Juice",price:2,quantity:1}] */
  const {cartData, setCartData, amount, setAmount, totalPrice, setTotalPrice} = useContext(dataContext);
  const cartItem = cartData.find((item)=>{return item.name===name});
  // console.log(cartItem);
  // This function fills your cart with new product or just increment the qunatity of an existing product
  const AddHandler = ()=>{
  // If the item doesn't existin the cart we make a copy of existing cart data and add new product data
  if(!cartItem){
    setCartData([...cartData, {name:name,price:price,quantity:1}]);
    setAmount((prevState) => prevState+1);
    setTotalPrice((prevPrice)=> prevPrice+ price);
  }
  // If the item already exists in the cart we increment the quantity of that product by 1
  else{
    const updatedCart = cartData.map( (item) => { return item.name===name? {...item, quantity: item.quantity + 1 } : {...item} })
    setCartData(updatedCart);
    setAmount((prevState) => prevState+1);
    setTotalPrice((prevPrice)=> prevPrice+ cartItem.price);
    console.log(updatedCart);
    console.log(cartItem);
  }

  }
  const RemoveHandler = ()=>{
    console.log("patience my boy!");
    // If quantity of that item in cart is >1 decrement quantity by 1
    if(cartItem.quantity>1){
      const tempCartData = cartData.map((element)=>{return element.name===cartItem.name? {...element, quantity:element.quantity-1}:{...element}});
      setCartData(tempCartData);
      setAmount((prevState) => prevState-1);
      setTotalPrice((prevPrice)=> prevPrice - cartItem.price);
    }
    if(cartItem.quantity===1){
      const newCartData = cartData.filter((element)=>{return element.name !== cartItem.name})
      setCartData(newCartData);
      setAmount((prevState) => prevState-1);
      setTotalPrice((prevPrice)=> prevPrice - cartItem.price);
    }
    // If quantity of that item in cart is =1 remove item from cart
  }
  return (
    <>
    {!cartItem && (<button className="cart-button icon-styles" onClick={()=>{AddHandler()}}><img src="./src/assets/images/icon-add-to-cart.svg" alt="cart-icon"/> Add To Cart</button>) }
    {/* If product already exists in cart then increment and decrement quantity */}
    {/* {cartItem && (<button className="cart-button" onClick={()=>{AddHandler()}}>-  +</button>) }   */}
    {cartItem && (<div className="cart-button add-remove-styles" style={{padding:0}}>
                    <button onClick={()=>{RemoveHandler()}}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={()=>{AddHandler()}}>+</button>
    </div>) }  
    </>
    // <button className="cart-button" onClick={()=>{AddHandler()}}>Add To Cart</button>
  )
}

export default CartButton
  // const clickHandler = ()=>{
  //   console.log(name);
  //   console.log(price);
  // }