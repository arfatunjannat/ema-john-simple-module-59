import React from 'react';
import { Link   } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../context/useAuth';

import './Login.css'

const Login = () => {
    const{signInUsingGoogle}=useAuth();

   const location =useLocation();
    const history =useHistory();
    const redirect_uri = location.state?.from || '/shop';
  // console.log('came from',location.state?.from);
    
     const handleGoogleLogin = () => {

       signInUsingGoogle()

         .then(result =>{
         history.push(redirect_uri);
       })
                   
         
     }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form >
                <input type="email" name="" id="" placeholder='your email'/>
                <br />
                <input type="password" name="" id="" placeholder='your password'/>
                <br />
                <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <Link to="/register">Create Account</Link> </p>
                <div>----------or-----------</div>

                <button onClick={handleGoogleLogin} className='btn-regular'>Google Sign In</button>
                
                
            </div>

        </div>
    );
};

export default Login;