import React from 'react'
import Home from './Pages/Home.js';
import LoginSignup from "./Pages/Login-Signup.js";
import AdminLogin from "./Pages/Admin_login_Ramani.js";
import AdminHomepage from "./Pages/Admin_homepage.js";
import AllProducts from './Pages/AllProducts.js';


import { getDatabase } from "firebase/database";
import { Route, Routes } from "react-router-dom";
import history from './history.js';

//instance of db from firebase realtime db



function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login-Signup" element={<LoginSignup />} />
        <Route path="/AdminLogin-Ramani" element={<AdminLogin/>} />
        <Route path="/Admin_Homepage" element={<AdminHomepage/>} />
        <Route path="/allProducts" element={<AllProducts/>}/>
      </Routes>
    
    
    </>
  );
}

export default App;
