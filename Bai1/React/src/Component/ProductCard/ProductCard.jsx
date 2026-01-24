import React from 'react'
import "./ProductCard.css"
import ProductImg from "../../assets/kfc.png"

const ProductCard = () => {
  return (
    <div className='SubBox's>
        <img src={ProductImg} alt="" className='ProductImg'/>
        <h1 className='Name'>KFC</h1>
        <h1 className='Price'>500000</h1>
        <button className='Btn'>Add to cart</button>
    </div>
  )
}

export default ProductCard
