import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className='auth-form'>
        <h2>Register</h2>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input id='name' name='name' type="text" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id='email' name='email' type="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id='password' name='password' type="password" />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Signup