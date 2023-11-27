import React from 'react'
import { useStateValue } from './StateProvider'

import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"


const Checkout = () => { 
  const [{ cart }] = useStateValue()
    
  return (
    <div className='checkout'>
        <div className='checkout_left'>
      <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" alt="" />
      
      {cart?.length === 0 ? (
        <div>
                  <h2>Your Shopping Cart is empty</h2>  
                  <p>You have no items in your cart. To buy one or more items click on "Add to cart" next to the item.</p>

        </div>
      ) : (
        <div>
                      <h2 className='checkout_title'>Your Shopping Cart</h2>
                      {cart.map(item => (
                          <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />  
                      ))}
             
        </div>
              )}

          </div> 

          {cart.length>0 && (
          
              <div className='checkout_right'>
                  {/* <h1>Wishlist</h1> */}
                 <Subtotal/>
              </div>
          )} 
    </div>
  )
}

export default Checkout;
