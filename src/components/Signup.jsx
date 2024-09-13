import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';

const Signup = () => {

    const {register} = useAuth();

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(6, 'Min 6 characters').required('Required'),
        }),
        onSubmit: (values) => {
          register(values.name, values.email, values.password);
        },
      });

  return (
    <div className='auth-form'>
        <h2>Register</h2>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input id='name' name='name' type="text" onChange={formik.handleChange}
                value={formik.values.name}/>
                {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
                ) : null}
            </div>
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
                value={formik.values.password} />
                {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
                ) : null}
            </div>
            <button type="submit">Register</button>
            <p>Already have an account? <Link to='/login'>Login here</Link> </p>
        </form>
    </div>
  )
}

export default Signup