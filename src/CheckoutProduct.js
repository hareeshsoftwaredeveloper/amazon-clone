import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, title, rating, image, price }) => {

  const [{}, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "Remove_From_Cart",
      id: id
    });
  }

  return (
    <div className='checkoutProduct'>
      <img src={image} className='checkoutProduct_image' alt="" /> 
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='checkoutProduct_rating'>
          {Array.from({ length: rating }, (_, index) => (
            <p className='star' key={index}>★</p>
          ))}
        </div>
        <p className='checkoutProduct_title'>{title}</p>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
