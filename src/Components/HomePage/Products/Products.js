import React from 'react'
import Product from './Product'
import "./ProductStyle.css"

const Products = () => {
  const products = [
    {
      "id" : 1,
      "img" : "https://img.freepik.com/premium-photo/coffee-beans-burlap_146346-1621.jpg?w=740",
      "title" : "coffee bean"
    },
    {
      "id" : 2,
      "img" : "https://img.freepik.com/premium-psd/coffee-beans-isolated_328278-274.jpg?w=740",
      "title" : "coffee bean"
    },
    {
      "id" : 3,
      "img" : "https://img.freepik.com/premium-photo/coffee-beans-burlap_146346-1621.jpg?w=740",
      "title" : "coffee bean"
    },
    {
      "id" : 4,
      "img" : "https://img.freepik.com/premium-psd/coffee-beans-isolated_328278-274.jpg?w=740",
      "title" : "coffee bean"
    },
  ];
  return (
    <div className='main-container'>
      <h2 className='product-header'>Our Products</h2>
      <div className='cards'>
        {
          products.map(product=><Product
          key={product.id}
          product={product}
          ></Product>)
        }
          
      </div>
      
    </div>
  )
}

export default Products
