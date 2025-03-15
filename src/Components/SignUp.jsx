import React from 'react'
import "../CSS/Login.css"

const SignUp = () => {
  return (
    <div className='card-container'>
    <div className="card">
        <h2 className='login-heading'>Create Your Account</h2>
        <form className='login-form'>
           <input className='login-input' type="text"  placeholder="Name" />
           <input className='login-input' type="email"  placeholder="Email" />
           <input className='login-input' type="password" placeholder="Password"/>
           <input className='login-input' type="tel" placeholder="Phone Number"/>
           <button className='login-btn'type="submit"><b>Register</b></button>
        </form>
    </div>
    </div>
  )
}

export default SignUp