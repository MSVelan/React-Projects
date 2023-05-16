import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import Product from './Product';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat 
        renderText={(value)=>(
          <>
            <p>
              Subtotal ({ basket.length } items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox" name="" id="" /> This order contains a gift
            </small>
          </>
        )}

        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType='text'
        thousandSeparator={true}
        prefix='$'
      />
      <div className="subtotal__gift"><button>Proceed to Checkout</button></div>
    </div>
  )
}

export default Subtotal