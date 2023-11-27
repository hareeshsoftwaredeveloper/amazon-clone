import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';

const Subtotal = () => {
  const [{ cart }] = useStateValue();

  

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type="checkbox"/> This order contains
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} // Pass the total value here
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
