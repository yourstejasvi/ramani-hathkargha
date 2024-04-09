import React, { useEffect, useState } from 'react';
import { useFirebase } from '../config/firebase';
import { signInWithGoogle} from '../config/firebase';
import { useNavigate } from "react-router-dom";
import Google from "../Assets/google_png.png";
import Logo from "../Assets/Ramani-logo.png";

const LoginSignup = () => {

      const firebase = useFirebase();
      const navigate = useNavigate ();

      const[email, setEmail] = useState('');
      const[password, setPassword] = useState('');
      const [isNewUser, setIsNewUser] = useState(true);
      const [error, setError] = useState(null);


      // useEffect(() => {
      //   if (firebase.isLoggedIn) {
      //     navigate('/');
      //   }
      // })

      const handleSwitchMode = () => {
        setIsNewUser(!isNewUser); // Toggle between signup and login modes
      };

      const handleSubmit = async (e) => {
      
            e.preventDefault();

            if (isNewUser) {
              const result = await firebase.signupUserWithEmailAndPassword(email, password);
              if(result){
                setEmail("")
                setPassword("")
              }
              console.log(result)
            } else {
              const result = await firebase.signInUserWithEmailAndPassword(email, password);
              if(result){
                
              }
              console.log(result)
            };
          
          
        

      };

  return (
    <>
      <div className='relative z-10 w-full h-[80px] shadow-md '>
        <img src={Logo} alt="Logo" className='cursor-pointer h-14 ml-14 mt-3' /> 
      </div>

      <div className='mt-[120px] w-96 flex flex-col ml-[550px] rounded-lg shadow-xl p-6 border-2 border-gray-200'>

          <form onSubmit={handleSubmit}>
                  <h1 className='flex justify-center text-3xl font-bold tracking-widest text-[#8f1434]'>{isNewUser ? "SIGNUP WITH MAIL" : "LOGIN"}</h1>

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

                  {/* Display error message if exists */}
                        {error && <p className="text-red-500 mt-2">{error}</p>}

                  <h1 className='mt-4 ml-4'>
                    {isNewUser ? "Already have an account? " : "Don't have an account? "}
                    <a className='cursor-pointer text-blue-400 hover:text-blue-700' onClick={handleSwitchMode}>
                      {isNewUser ? "Login" : "Signup"}
                    </a>
                  </h1>

                  <button 
                    className='flex justify-center w-full mt-4 rounded-xl bg-[#8f1434]  text-white font-semibold shadow-md p-3 hover:shadow-lg'

                  >
                    {isNewUser ? "SIGNUP" : "LOGIN"}
                  </button>

          </form>

          {!isNewUser &&
          
                
                    <button 
                    className='rounded-lg bg-gray-100 shadow-md flex flex-row pl-16 py-3 mt-4 hover:shadow-lg' 
                    onClick={signInWithGoogle}
                  >
                    <img className='h-8 mr-1' src={Google} alt="Google" />
                    Continue with Google
                  </button>

          }
            

          

      </div>

      
      
    </>
  );
};

export default LoginSignup;
