import React from "react";
import FormPage from "./components/Form-page/form-page";
import './App.css';
import Signup from './components/Firstcomponent/Signup/Signup';
import Login from './components/Firstcomponent/Login/Login';

function App() {
  return (
    <div>
      
      <FormPage />
    <div>
      {/* Show Signup */}
      <Signup />

      {/* Or show Login */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
