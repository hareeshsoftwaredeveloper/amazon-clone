import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

const Product = ({ id, title, image, price, rating }) => {
  const [{}, dispatch]=useStateValue()
  const addToCart = () => {
    dispatch(
      {
        type: "Add_To_Cart",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating:rating,
        }
      }
    )
  }

  return (
      <div className='product'>
        <div className='product_info'>
          <p>{title}</p>
          <p className='product_price'>
              <small>$</small> 
              <strong>{price}</strong>
          </p>
          <div className='product_rating'>
              {Array.from({ length: rating }, (_, index) => (
              <p className='star'>★</p>
            ))}
          </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default Product