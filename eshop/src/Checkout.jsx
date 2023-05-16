import React from 'react'
import Header from './Header'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import './Checkout.css'
function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div>
        <Header />
        <div className="checkout">
          <div className="checkout__left">
            <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f1b16fb1-5e02-4c9f-8633-fc6440174541.jpg"  alt="Shopping offers" className='checkout__ad'/>
            <div>
              <h2 className='checkout__title'>Your Shopping Basket</h2>
              {basket.map(item=>(
                <CheckoutProduct 
                  id = {item.id}
                  title = {item.title}
                  image = {item.image}
                  price = {item.price}
                  rating = {item.rating}
                />
              ))}
            </div>
              
          </div>
          <div className="checkout__right">
            <Subtotal />
          </div>
        </div>
    </div>
  )
}

export default Checkout