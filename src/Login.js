import React, { useState } from 'react'
import "./Login.css"
import { Link ,useHistory} from 'react-router-dom/cjs/react-router-dom.min'
import {auth} from "./firebase";


function Login() {
  const history=useHistory();
    const [email,setEmail]= useState('');
    const [password,setpassword]= useState('');

    const signIn =e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
      .then(auth =>{
        history.push('/')
      })
      .catch(error=> alert(error.message))

    }
    const register =e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
          //new user with email created
          console.log(auth);
          if(auth){
            history.push('/')
          }
        })
        .catch(error => alert(error.message))


    }
  return (
    <div className='login'>
        <Link to="/">
        <img  className="loginimg"
              src="https://cdn-icons-png.flaticon.com/128/11423/11423450.png"/>
        </Link>

        <div className='login_container'>
           <h1>Sign In</h1>

           <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange=
            {e =>setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type="password" value={password} onChange=
            { e=> setpassword(e.target.value)}/>

            <button  type='submit' onClick={signIn}
             className='signinbutton'>Sign In</button>
           </form>
           <p> By continuing, you agree to Amazon's 
              Conditions of Use and Privacy Notice.
           </p>

           <button 
           onClick={register}
            className='createbutton'>
             Create your account
            </button>
        
        </div>

    </div>
  )
}

export default Login