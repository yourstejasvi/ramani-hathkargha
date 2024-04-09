import React from 'react'
import { TbFilterSearch } from "react-icons/tb";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { IoBagAddSharp } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const card = (props) => {
    return (
        <div className='grid gap-6 ml-10 mt-16'>
          <div className='relative h-max w-48 bg-white rounded-lg shadow-md'>
            <div className='absolute top-0 left-[180px]'>
              <button className='bg-[#8f1434] rounded-full p-5 shadow-md -ml-5 hover:shadow-xl'>
                <IoBagAddSharp className='text-md text-white' />
              </button>
            </div>
    
            <div className='absolute top-[40px] left-[162px]'>
              <button className='bg-[#8f1434] rounded-full p-5 shadow-md -mr-5 mt-5 hover:shadow-xl'>
                <GoHeart className='text-sm text-white' />
              </button>
            </div>
    
            <img src={props.src} className='h-60 w-[189px] p-4 -mt-28 shadow-md' alt={props.productName} />
            <h1 className='text-sm p-2 ml-5 cursor-pointer'>{props.productName}</h1>
            <div className='flex flex-col'>
              <h1 className='text-sm p-2 ml-5 -mt-4 tracking-wide'>₹{props.productPrice}/-</h1>
              <button className='bg-[#8f1434] px-3 py-1 rounded-b-xl shadow-md text-white font-md hover:shadow-lg'>View</button>
            </div>
          </div>
        </div>
      );
    };
    
export default card