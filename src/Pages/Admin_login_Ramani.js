import React from 'react'
import Logo from "../Assets/Ramani-logo.png";
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../config/firebase";

const auth = getAuth(app);

const Admin_login_Ramani = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const LogInAdmin = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((value) => console.log("Signin success"))
        .catch((err) => console.log(err));
    };

  return (
    <>
    <div className='bg-[#8f1434] flex justify-center items-center h-screen'>

        <div className='bg-white rounded-lg shadow-md w-[700px] h-1/2 flex flex-row justify-around'>
            <img src={Logo} className='h-24 mt-[110px]' />



                        <div className='flex flex-col mt-[70px]'>
                               
                                <h1 className='text-3xl font-bold text-[#8f1434] tracking-wider mr-5'>ADMIN LOGIN</h1>
                                <input type="email" 
                                    placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    className='p-2 rounded-lg mt-4'

                                />
                                <input type="password"
                                    placeholder='Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    className='p-2 rounded-lg mt-2'/>

                                <button className='rounded-xl bg-[#8f1434] text-white font-semibold shadow-md p-3 mt-3 flex flex-row justify-center hover:shadow-lg'
                                        onClick={{LogInAdmin}}>LOGIN</button>


                        </div>
    

                        


        </div>


    </div>
    </>
  )
}

export default Admin_login_Ramani