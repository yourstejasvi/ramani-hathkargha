import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Rajwadi from "../Assets/Rajwadi.jpg";
import Pochampally from "../Assets/Pochampally.jpg";
import Tussar from "../Assets/Tussar.jpg";
import Navigation from "../components/navigation.jsx";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

import "../css/Home.css";


const Home = () => {

  const navigate = useNavigate();
 

  return (
    <div className='scroll-container'>        
        <Navigation navigate={navigate} />
        <Fade
          autoplay={true}
          infinite={true}
          onChange={function noRefCheck(){}}
          onStartChange={function noRefCheck(){}}
          indicators={true}
          duration={2000}
          transitionDuration={800}
        >
          <div className="mt-16 ml-3">
            <img src={Rajwadi} alt='img1'></img>
          </div>
          <div className="mt-16 ml-3">
            <img src={Pochampally} alt='img2'></img>
          </div>
          <div className="mt-16 ml-3">
            <img src={Tussar} alt='img3'></img>
          </div>
        </Fade>

        {/* New Arrivals */}

        <h1 className='ml-20 mt-2 text-3xl text-neutral-600 font-bold tracking-widest'>New Arrivals</h1>
        <div className='flex flex-row w-full h-[300px] mt-5 bg-slate-600'>



        </div>

        <h1 className='ml-20 mt-2 text-3xl text-neutral-600 font-bold tracking-widest'>Trending</h1>
        <div className='flex flex-row w-full h-[300px] mt-5 bg-slate-600'>



        </div>
        
        {/* About */}

        <h1 className='ml-20 mt-2 text-3xl text-neutral-800 font-bold tracking-widest'>About Ramani</h1>
        <div className='flex flex-row w-full h-[300px] mt-5 bg-slate-600'>



        </div>

        {/* Footer */}


        <div className='h-[350px] w-full bg-red-900 mt-16'>
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <h1 className='text-white text-lg font-semibold tracking-wider ml-20 mt-16 underline underline-offset-4'>CUSTOMER POLICIES</h1>
                <a className='text-white font-semibold tracking-wider ml-20 mt-5 cursor-pointer hover:tracking-widest'>Contact Us</a>
                <a className='text-white font-semibold tracking-wider ml-20 cursor-pointer hover:tracking-widest'>FAQ</a>
                <a className='text-white font-semibold tracking-wider ml-20 cursor-pointer hover:tracking-widest'>T&C</a>
                <a className='text-white font-semibold tracking-wider ml-20 cursor-pointer hover:tracking-widest'>Terms Of Use</a>
                <a className='text-white font-semibold tracking-wider ml-20 cursor-pointer hover:tracking-widest'>Track Orders</a>
                <a className='text-white font-semibold tracking-wider ml-20 cursor-pointer hover:tracking-widest'>Cancellation</a>
                <a className='text-white font-semibold tracking-wider ml-20 cursor-pointer hover:tracking-widest'>Privacy Policy</a>

            </div>
            
            <div className='flex-col'>
                <h1 className='text-white text-lg font-semibold tracking-wider ml-[320px] mt-16 underline underline-offset-4'>REGISTERED OFFICE ADDRESS</h1>
                <h1 className='text-white tracking-wider ml-[320px] mt-5'>Ground floor, A-149, Mahakali Housing Society, </h1>
                <h1  className='text-white tracking-wider ml-[320px]'> Shahpura Road, AURA MALL, Arera Colony, Bhopal, </h1>
                <h1  className='text-white tracking-wider ml-[320px]'> Madhya Pradesh, 462016</h1>
                <h1 className='text-white text-lg font-semibold tracking-wider ml-[320px] mt-3 underline underline-offset-4'>KEEP IN TOUCH</h1>
                <div className='flex flex-row'>
                    <FaSquareInstagram style={{marginLeft:'328',marginTop:'20',color:'white',scale:'2',cursor:'pointer'}} />
                    <FaSquareFacebook style={{marginLeft:'28',marginTop:'20',color:'white',scale:'2',cursor:'pointer'}} />
                    

                </div>
            </div>
            <div className='flex flex-col'>
            <h1 className='text-white text-lg font-semibold tracking-wider ml-36 mt-16 underline underline-offset-4'>BEST OF CATEGORIES</h1>
                <a className='text-white font-semibold tracking-wider ml-36 mt-5 cursor-pointer hover:tracking-widest'>Fabrics</a>
                <a className='text-white font-semibold tracking-wider ml-36 cursor-pointer hover:tracking-widest'>Shirt</a>
                <a className='text-white font-semibold tracking-wider ml-36 cursor-pointer hover:tracking-widest'>Kurta set</a>
                <a className='text-white font-semibold tracking-wider ml-36 cursor-pointer hover:tracking-widest'>Curtains</a>
                <a className='text-white font-semibold tracking-wider ml-36 cursor-pointer hover:tracking-widest'>Sarees</a>

            </div>

        </div>
        <h1 className='text-white text-sm tracking-wider ml-[580px] mt-[35px]'>© 2024 www.Ramani.com. All rights reserved.</h1>
    </div>
           
    
    
           
    </div>
   
  )
}

export default Home