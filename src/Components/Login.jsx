import React, { useDebugValue } from 'react'
import "../CSS/Login.css"

const Login = () => {
  return (
    <div className='card-container'>
    <div className="card">
        <h2 className='login-heading'>Sign In To Your Account</h2>
        <form className='login-form'>
           <input className='login-input' type="email"  placeholder="Email" />
           <input className='login-input' type="password" placeholder="Password"/>
           <button className='login-btn'type="submit"><b>Login</b></button>
        </form>
    </div>
    </div>
  
  )
}

export default Login