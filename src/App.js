import React from 'react'
import Home from './Pages/Home.js';
import LoginSignup from "./Pages/Login-Signup.js";
import AdminLogin from "./Pages/Admin_login_Ramani.js";
import AdminHomepage from "./Pages/Admin_homepage.js";
import { getDatabase } from "firebase/database";
import { app } from "../src/config/firebase.js";
import { Route, Routes } from "react-router-dom";
import history from './history.js';

const db = getDatabase(app); //instance of db from firebase realtime db



function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login-Signup" element={<LoginSignup />} />
        <Route path="/AdminLogin-Ramani" element={<AdminLogin/>} />
        <Route path="/Admin_Homepage" element={<AdminHomepage/>} />
      </Routes>
    
    
    </>
  );
}

export default App;
