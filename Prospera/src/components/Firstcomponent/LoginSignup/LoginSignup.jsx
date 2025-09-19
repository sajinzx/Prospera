import React from 'react';
import './LoginSignup.css';

import email_icon from '../Assets/email.png';
import pass_icon from '../Assets/password.png';
import phone_icon from '../Assets/phonenumber.jpg';
import user_icon from '../Assets/username.jpg';

const LoginSignup = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className="text">Signup</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Username" />
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={phone_icon} alt="" />
          <input type="tel" placeholder="Phone Number" />
        </div>

        <div className="input">
          <img src={pass_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
