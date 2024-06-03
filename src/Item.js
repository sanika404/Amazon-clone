import React from 'react'
import "./Item.css";
import { useStateValue } from './StateProvider';

function Item({id,title,image,price,rating }) {
  
  const [ {basket},dispatch]=useStateValue();
  console.log("this is the basket >>>",basket);

  const addToBasket=() => {
    //dispatch the item into the data layer
    dispatch({
      type:"ADD_TO_BASKET",
      item: {
        id: id,
        title :  title ,
        image :   image ,
        price :    price ,
        rating :    rating,
     
      },
    });
  };

    return (
        <div className='product'>

            <div className='prod_info'>
              
            <p>{title}</p> 
            <p className='prod_price'>
            <small>Rs.</small>
            <strong>{price}</strong>
            </p>
            
            
            <div className="rating">
              {Array(rating).fill().map((_,i)=> (
                 <p>⭐</p>
              ))}
             
            </div>
            </div >
            
            <img src={image} alt=''/>

          
             <button onClick={addToBasket}> Add to cart </button>
    
    
    
        </div>
      )
    }

export default Item