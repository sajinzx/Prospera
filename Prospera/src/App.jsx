import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
}from "react-router-dom";
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/Signup"
import Home from "./pages/dashboard/home"
import Income from "./pages/dashboard/income"
import Expense from "./pages/dashboard/expense"
import FormPage from './pages/Auth/formpage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root/>}/>
          <Route path="/Login" exact element={<Login/>}/>
          <Route path="/Signup" exact element={<SignUp/>}/>
          <Route path="/dashboard" exact element={<Home/>}/>
          <Route path="/income" exact element={<Income/>}/>
          <Route path="/expense" exact element={<Expense/>}/>
          <Route path="/formpage" exact element={<FormPage/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
const Root =()=>{
  const isAuthenticated=!!localStorage.getItem("token");
  return isAuthenticated?(
    <Navigate to="/dashboard"/>
  ):(<Navigate to ="/login"/>);
}
