import React from 'react';
import './Header.css'
import 'boxicons'
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';



function Header() {

const [{basket,user},dispatch]=useStateValue();

const handleAuthentication =() =>{
  if(user)
  {
     auth.signOut();
  }
}

  return (
    <div className='header '>
      <Link to="/">
     
      <img  className="headlogo" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png"/>
       </Link>
    <div className='searchbar'>
        <input className='searching' type='text'/>
        <i className="hsearch" ><box-icon name='search' ></box-icon></i>
       
       
    </div>

    <div className='headernav'>
        <Link to= {!user && "/login" } >
            <div  onClick={handleAuthentication}  className='headeroption'>
                <span className='lineone'>Hello guest</span>
                <span className='linetwo'>{user ? 
                'Sign out' :'Sign In'}</span>
            </div>
        </Link>

            <div className='headeroption'>
                <span className='lineone'>Returns &</span>
                <span className='linetwo'>Orders</span>
            </div>

            <div className='headeroption'>
                <span className='lineone'>Join the</span>
                <span className='linetwo'>Community</span>
            </div>
    </div>


          <Link to="/checkout">
            
          <div className='cart'>  
          
          
            <i className="hcart" ><box-icon name='cart' color='white' ></box-icon></i>
            <span className='number'>{basket?.length}</span> 
            
           </div> 
           </Link>

    
    </div>

  )
}

export default Header