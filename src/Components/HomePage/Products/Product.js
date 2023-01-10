import React from 'react'
import "./ProductStyle.css"

const Product = ({product}) => {
  return (
    <div className='card'>
      <img src={product.img} alt="coffee" />
      <h4 className='product'>{product.title}</h4>
    </div>
  )
}

export default Product
