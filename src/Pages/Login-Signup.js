import React, { useState } from 'react';
import { auth } from "../config/firebase";
import { signInWithGoogle } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Google from "../Assets/google_png.png";
import Logo from "../Assets/Ramani-logo.png";

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(true); // Initial state set to true for signup mode

  const handleSwitchMode = () => {
    setIsNewUser(!isNewUser); // Toggle between signup and login modes
  };

  const handleAuth = async () => {
    try {
      if (isNewUser) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className='relative z-10 w-full h-[80px] shadow-md '>
        <img src={Logo} alt="Logo" className='cursor-pointer h-14 ml-14 mt-3' /> 
      </div>

      <div className='mt-[120px] w-96 flex flex-col ml-[550px] rounded-lg shadow-xl p-6 border-2 border-gray-200'>

          <h1 className='flex justify-center text-3xl font-bold tracking-widest text-[#8f1434]'>{isNewUser ? "SIGNUP" : "LOGIN"}</h1>

          <div className='flex flex-col'>
            <input 
              type="email" 
              placeholder='Email'
              value={email}
              className='mt-4 p-2 border-2 border-gray-200 rounded-lg'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password"
              placeholder='Password'
              value={password}
              className='mt-4 p-2 border-2 border-gray-200 rounded-lg'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <h1 className='mt-4 ml-4'>
            {isNewUser ? "Already have an account? " : "Don't have an account? "}
            <a className='cursor-pointer text-blue-400 hover:text-blue-700' onClick={handleSwitchMode}>
              {isNewUser ? "Login" : "Signup"}
            </a>
          </h1>

          <button 
            className='mt-4 rounded-xl bg-[#8f1434] text-white font-semibold shadow-md p-3 hover:shadow-lg'
            onClick={handleAuth}
          >
            {isNewUser ? "SIGNUP" : "LOGIN"}
          </button>

          <h1 className='font-semibold tracking-widest ml-[150px] mt-4 text-[#8f1434]'>OR</h1>

          <button 
            className='rounded-lg bg-gray-100 shadow-md flex flex-row pl-16 py-3 mt-4 hover:shadow-lg' 
            onClick={signInWithGoogle}
          >
            <img className='h-8 mr-1' src={Google} alt="Google" />
            Continue with Google
          </button>

      </div>
      
    </>
  );
};

export default LoginSignup;
