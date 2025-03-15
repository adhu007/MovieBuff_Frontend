import React from 'react'
import "../CSS/Login.css"


const AddMovie = () => {
  return (
    <div className='card-container'>
    <div className="card">
        <h2 className='login-heading'>Add Movie Details</h2>
        <form className='login-form'>
           <input className='login-input' type="text"  placeholder="Movie Name" />
           <input className='login-input' type="text" placeholder="Movie Description"/>
           <input className='login-input' type="number" placeholder="Rating out of 10"/>
           <button className='login-btn'type="submit"><b>Submit</b></button>
        </form>
    </div>
    </div>
  )
}

export default AddMovie