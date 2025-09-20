import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Signup.css';

import email_icon from '../../components/assets/emailimage.jpg';
import pass_icon from '../../components/assets/password.jpg';
import phone_icon from '../../components/assets/phonenumber.jpg';
import user_icon from '../../components/assets/person.jpg';


const Signup = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if(response.ok){
        alert(data.message);
        navigate('/formpage');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to server');
    }
  }
  return (
    <div className='container'>
      <div className='header'>
        <div className="text">Signup</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" className='logo'/>
          <input type="text" placeholder="Username" />
        </div>

        <div className="input">
          <img src={email_icon} alt="" className='logo'/>
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={phone_icon} alt="" className='logo'/>
          <input type="tel" placeholder="Phone Number" />
        </div>

        <div className="input">
          <img src={pass_icon} alt="" className='logo'/>
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={handleSubmit}>Sign Up</div>
      </div>
    </div>
  );
}

export default Signup;
