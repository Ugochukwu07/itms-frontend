import React from 'react'
import { useNavigate } from "react-router-dom";


import login from '../../assets/login.jpg'

function Login() {
    const navigate = useNavigate();


    const handleLogin = () => {
        //redirect to '/dashboard'
        navigate("/dashboard");
    }
  return (
    <div className='login'>
      <div className='login_form'>
        <div className='form_box'>
            <h1 className='form_title'>Login</h1>
            <form>
                <div className='form_group'>
                    {/* <label htmlFor='username'>Username</label> */}
                    <input type='text' id='username' className='error' placeholder='Email Address*' />
                    <small className='error'>Email Address is required*</small>
                </div>
                <div className='form_group'>
                    {/* <label htmlFor='password'>Password</label> */}
                    <input type='password' id='password' placeholder='Your Password*' />
                </div>
                <button onClick={handleLogin} className='form_button'>Login</button>
            </form>
        </div>
      </div>
      <div className='login__image' style={{ backgroundImage: `url('${login}')` }}>

      </div>
    </div>
  )
}

export default Login
