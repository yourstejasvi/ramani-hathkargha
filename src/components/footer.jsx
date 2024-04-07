import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";


const footer = () => {
  return (
    <>
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
    </>
  )
}

export default footer