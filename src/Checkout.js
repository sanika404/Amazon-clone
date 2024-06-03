import React from 'react'
import'./Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
function Checkout() {

  const [ {basket},dispatch]=useStateValue();

  return (
<div className='checkout'>


    <div className='checkoutleft'>
      <img className='checkoutad' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Jailer_Launch/400x39-SWM_NP._CB595886298_.jpg "/>
        
        <div >
          <h2 className='checkouttitle'> Your shopping basket</h2>
             {basket.map(item=>  (
          <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price} 
          rating={item.rating}
          />))}

         </div> 


    </div>

    <div className='checkoutright'>
        <Subtotal />
       
    </div>


</div>
  )
}

export default Checkout