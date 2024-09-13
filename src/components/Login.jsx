import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Login = () => {

    const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Min 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  return (
    <div className='auth-form'>
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input id='email' name='email' type="email" onChange={formik.handleChange} 
                value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id='password' name='password' type="password" onChange={formik.handleChange}
                 value={formik.values.password}/>
                 {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
                ) : null}
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account? <Link to='/signup'>Register here</Link> </p>
        </form>
    </div>
  )
}

export default Login