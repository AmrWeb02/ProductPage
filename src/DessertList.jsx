import React from 'react'
import data from './data.json'

// Components
import DessertCard from './DessertCard'
import CartButton from './CartButton'
const DessertList = () => {
  return (
    <>
        <DessertCard data={data}/>
    </>

  )
}

export default DessertList