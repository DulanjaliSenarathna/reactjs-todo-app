import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth-form'>
        <h2>Login</h2>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input id='email' name='email' type="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id='password' name='password' type="password" />
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account? <Link to='/login'>Register here</Link> </p>
        </form>
    </div>
  )
}

export default Login