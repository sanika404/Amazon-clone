import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
function CheckoutProduct( {id,image,title,price,rating}) 
{
  const [ {basket},dispatch]=useStateValue();
  const removefrombasket= () => {
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id,
      
    })

  }
  return (
    <div className='CheckoutProduct'>
        <img  className="checkoutimg"src={image}/>

          <div className='checkoutinfo'>
            <p className='product_title'>{title}</p>
            <p className='product_price'>
             <small>Rs.</small>   
             <strong>{price} </strong></p>

              <div className='product_rating'>
                   {Array(rating).fill().map((_,i)=> (
                    <p>⭐</p>
                    ))}
              </div>

             <button onClick={removefrombasket}>Remove</button>
             
          </div>
    </div>
  )
}

export default CheckoutProduct