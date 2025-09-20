import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';



import email_icon from '../../components/assets/emailimage.jpg';
import pass_icon from '../../components/assets/password.jpg';





const Login = () => {
 
  // const[values,setValues]=useState({
  //   gmail:'',
  //   password:''
  // })
  return (
    <div className='container'>
      <div className='header'>
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={pass_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="forgot-password">
        Forgot Password? <span>Click Here!</span>
      </div>

      <div className="submit-container">
        <div className="submit">Login</div>
      </div>
    </div>
  );
}

export default Login;
