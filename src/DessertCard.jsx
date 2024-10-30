import React from 'react'
import CartButton from './CartButton'
const DessertCard = ({data}) => {
    //data.name, data.category, data.price
  const listitems = data.map( (item,index)=>{
    return <div className='single-item' key={item.name}>
            <img src={data[index].image.tablet} alt={data[index].name} />
            <p className="category">{item.category}</p>
            <p className="bolder">{item.name}</p>
            <p className="price">${item.price.toFixed(2)}</p>
            <CartButton name={item.name} price={item.price}/>
           </div>
    })
    
    return (
    <>
    <div className="flex-container">
      <h1 className="heading-align">Desserts</h1>
        {listitems}
    </div>
    </>
  )
}

export default DessertCard