import React from 'react'
import Loginimg from '../../Assets/login.svg'
import google from "../../Assets/google.svg"
import "./Login.css";

function Login() {
  return (
    <div className='Main-container'>
    <div className='Image'>
    <img src={Loginimg} alt=''/>
    </div>
    <div className='form'>
    <h3>Login</h3>
    <p>Enter Your Details To Access Account</p>
    <label>Email Address</label>
    <input type='email' placeholder='Enter your email'/>
    <label>Password</label>
    <input type='password' placeholder='Enter your password'/>
    <div className='action'>
    <h6> <input type="checkbox" id="myCheckbox"></input> Keep me Logged In</h6>
    <a href='#'>Forgot Password?</a>
    </div>
    <button className='Login-button'>Log Into Account</button>
    <p>Or</p>
    <button className='Sign-up'><img src={google} /> <a href='#'> Continue With Google</a></button>
    <p className='End-txt'>Are You New?  <a href='#'>Create Account</a></p>
    </div>
    </div>
  )
}

export default Login