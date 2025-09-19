import React from 'react';
import './Login.css';



import email_icon from '../../components/assets/emailimage.jpg';
import pass_icon from '../../components/assets/password.jpg';





const Login = () => {
    const handleLogin=async(e)=>
    {
        e.preventDefault();
        if(!validateEmail(email))
        {
            setError("Please Enter a valid email address.")
            return;
        }
        if(!password)
        {
            setError("Please enter the right password.")
            return;
        }
        setError("");
        //Login API Call
    }


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
