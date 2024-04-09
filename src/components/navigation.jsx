import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../Assets/Ramani-logo.png";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import EmptyCart from "../Assets/Empty_cart.jpg";
import BrokenHeart from "../Assets/Broken_heart.png";
import EmptyBag from "../Assets/Empty_bag.png";

const Navigation = ({ navigate }) => {
    const [isSareesOpen, setIsSareesOpen] = useState(false);
    const [isKurtisOpen, setIsKurtisOpen] = useState(false);
    const [isJewelleryOpen, setIsJewelleryOpen] = useState(false);
    const [isDecorOpen, setIsDecorOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const [isBagOpen, setIsBagOpen] = useState(false);

    const Navigate = useNavigate();
    

    const dropdownContainerRef = useRef(null);

    const dropdownRefs = {
        sarees: useRef(null),
        kurtis: useRef(null),
        jewellery: useRef(null),
        decor: useRef(null),
        profile: useRef(null),
        wishlist: useRef(null),
        bag: useRef(null)
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target)) {
                for (const key in dropdownRefs) {
                    if (dropdownRefs[key].current && dropdownRefs[key].current.contains(event.target)) {
                        // Clicked inside this dropdown, no need to close anything
                        return;
                    }
                }
                // Clicked outside any dropdown, close all
                setIsSareesOpen(false);
                setIsKurtisOpen(false);
                setIsJewelleryOpen(false);
                setIsDecorOpen(false);
                setIsProfileOpen(false);
                setIsWishlistOpen(false);
                setIsBagOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRefs]);



    const handleLoginSignupClick = () => {
        navigate('/Login-Signup');
    };

  return (
    <>
     <div className='relative z-10 w-full h-[80px] shadow-md'>
        
           <img src={Logo} alt="Logo" className='cursor-pointer h-14 ml-14 mt-3' /> 
        
        <div className='flex justify-start -mt-14 ml-[230px]'>
            <div className='text-md font-bold p-10 h-8 text-neutral-500 cursor-pointer border-b-4 border-transparent hover:border-pink-800'
                 ref={dropdownContainerRef}
                 onClick={() => {setIsSareesOpen((prev) => !prev);}}
            >SAREES</div>
            {isSareesOpen && (
                <div className='absolute h-[142px] w-[136px] mt-[80px] shadow-lg bg-white'>
                    <div className='flex flex-col '> 
                            <div className='cursor-pointer px-4 pb-2 mt-5 border-b-2 border-transparent hover:border-pink-800'>
                                <a className='font-semibold text-neutral-500'>Cotton</a>
                           </div>
                            <div className='cursor-pointer px-4 pb-2 mt-3 border-b-2 border-transparent hover:border-pink-800'>
                                <a className='font-semibold text-neutral-500'>Silk</a>
                            </div>
                            <div className='cursor-pointer px-4 pb-2 mt-3 border-b-2 border-transparent hover:border-pink-800'>
                                <a className='font-semibold text-neutral-500'>Linen</a>
                            </div>
                        
                    </div>                   
                </div>
            )
            }
            <div className='text-md font-bold p-10 h-8 text-neutral-500 cursor-pointer border-b-4 border-transparent hover:border-amber-600'
                 ref={dropdownContainerRef}
                 onClick={() => {setIsKurtisOpen((prev) => !prev);}}>KURTIS</div>
                 {isKurtisOpen && (
                    <div className='absolute h-[258px] w-[136px] ml-[137px] mt-[80px] shadow-lg bg-white'>
                    <div className='flex flex-col '> 
                            <div className='cursor-pointer px-4 pb-1 mt-5 border-b-2 border-transparent hover:border-amber-600'>
                                <a className='font-semibold text-neutral-500'>A-line</a>
                           </div>
                            <div className='cursor-pointer px-4 pb-1 mt-3 border-b-2 border-transparent hover:border-amber-600'>
                                <a className='font-semibold text-neutral-500'>Casual</a>
                            </div>
                            <div className='cursor-pointer px-4 pb-1 mt-3 border-b-2 border-transparent hover:border-amber-600'>
                                <a className='font-semibold text-neutral-500'>Straight</a>
                            </div>
                            <div className='cursor-pointer px-4 pb-1 mt-3 border-b-2 border-transparent hover:border-amber-600'>
                                <a className='font-semibold text-neutral-500'>Angrakha</a>
                            </div>
                            <div className='cursor-pointer px-4 pb-1 mt-3 border-b-2 border-transparent hover:border-amber-600'>
                                <a className='font-semibold text-neutral-500'>Kaftaan</a>
                            </div>
                            <div className='cursor-pointer px-4 pb-1 mt-3 border-b-2 border-transparent hover:border-amber-600'>
                                <a className='font-semibold text-neutral-500'>Floor length</a>
                            </div>
                        
                    </div>                   
                </div>
                 )}
            <div className='text-md font-bold p-10 h-8 text-neutral-500 cursor-pointer border-b-4 border-transparent hover:border-lime-800'
                 ref={dropdownContainerRef}
                 onClick={() => {setIsJewelleryOpen((prev) => !prev);}}>JEWELLERY</div>
                 {isJewelleryOpen && (
                    <div className='absolute h-[298px] w-[166px] ml-[272px] mt-[80px] shadow-lg bg-white'>
                    <div className='flex flex-col '> 
                            <div className='cursor-pointer px-4 pb-1 mt-5 border-b-2 border-transparent hover:border-lime-800'>
                                <a className='font-semibold text-neutral-500'>Necklace</a>
                           </div>
                            <div className='cursor-pointer px-4 pb-1 mt-3 border-b-2 border-transparent hover:border-lime-800'>
                                <a className='font-semibold text-neutral-500'>Earring</a>
                            </div>
                            <div className='cursor-pointer px-4 pb-1 mt-3 border-b-2 border-transparent hover:border-lime-800'>
                                <a className='font-semibold text-neutral-500'>Maang tika</a>
                            </div>
                            <div className='cursor-pointer px-4 pb-1 mt-3 border-b-2 border-transparent hover:border-lime-800'>
                                <a className='font-semibold text-neutral-500'>Nose rings</a>
                            </div>
                            <div className='cursor-pointer px-4 pb-1 mt-3 border-b-2 border-transparent hover:border-lime-800'>
                                <a className='font-semibold text-neutral-500'>Bangles</a>
                            </div>
                            <div className='cursor-pointer px-4 pb-1 mt-3 border-b-2 border-transparent hover:border-lime-800'>
                                <a className='font-semibold text-neutral-500'>Rings</a>
                            </div>   
                            <div className='cursor-pointer px-4 pb-1 mt-3 border-b-2 border-transparent hover:border-lime-800'>
                                <a className='font-semibold text-neutral-500'>Set pieces</a>
                            </div>
                            
                    </div>                   
                    </div>
                    
                 )}
            <div className='text-md font-bold p-10 h-8 text-neutral-500 cursor-pointer border-b-4 border-transparent hover:border-pink-800'
                 ref={dropdownContainerRef}
                 onClick={() => {setIsDecorOpen((prev) => !prev);}}>DECOR</div>
                 {isDecorOpen && (
                    <div className='absolute h-[52px] w-[132px] ml-[438px] mt-[80px] shadow-lg bg-white'>
                    <div className='flex flex-col '> 
                            <div className='cursor-pointer px-4 pb-1 mt-5 border-b-2 border-transparent hover:border-pink-800'>
                                <a className='font-semibold text-neutral-500'>Wrought Iron</a>
                           </div>
                            

                    </div>                   
                </div>

            

                 )}

            <a className='text-md font-bold p-10 h-8 text-neutral-500 cursor-pointer border-b-4 border-transparent hover:border-amber-600'
                 onClick={Navigate('/allProducts')}>ALL</a>

        </div>
        
        


        <div className='flex justify-end -mt-[80px] mr-12'>
            <div className='flex flex-col p-4 h-[80px] cursor-pointer border-b-4 border-transparent hover:border-pink-800'
                 ref={dropdownContainerRef}
                 onClick={() => {setIsProfileOpen((prev) => !prev);}}>
                <PermIdentityIcon style={{marginLeft:'6'}} />
               <h1>Profile</h1> 
            </div>
            {isProfileOpen && (
                <div className='absolute h-[298px] w-[220px] ml-[272px] mt-[80px] shadow-lg bg-white'>
                <div className='flex flex-col '> 
                    <img src={EmptyCart} alt="" className='ml-5 mt-5'></img>
                    <h1 className='font-semibold text-neutral-500 ml-9'>You're not logged in!</h1>
                    <div className='flex flex-row justify-around mt-1 p-3'>
                        <button className='bg-pink-800 text-white font-semibold py-2 px-5 rounded-lg hover:shadow-lg' onClick={handleLoginSignupClick}>Login / Signup</button>
                    </div>
                </div>              
            </div>
            )}
            <div className='flex flex-col p-4 h-[80px] cursor-pointer border-b-4 border-transparent hover:border-amber-600'
                 ref={dropdownContainerRef}
                 onClick={() => {setIsWishlistOpen((prev) => !prev);}}>
                <FavoriteBorderOutlinedIcon style={{marginLeft:'12'}} />
                <h1>Wishlist</h1>
            </div>
            {isWishlistOpen && (
                <div className='absolute h-[298px] w-[220px] ml-[272px] mt-[80px] shadow-lg bg-white'>
                <div className='flex flex-col '> 
                    <img src={BrokenHeart} alt="" className='ml-12 mt-14 h-[150px] w-[120px]'></img>
                    <h1 className='font-semibold text-neutral-500 ml-9'>Nothing to see here!</h1>
                </div>              
            </div>
            )}
            <div className='flex flex-col p-4 h-[80px] cursor-pointer border-b-4 border-transparent hover:border-lime-800'
                 ref={dropdownContainerRef}
                 onClick={() => {setIsBagOpen((prev) => !prev); }}>
                <ShoppingBagOutlinedIcon  />
                <h1>Bag</h1>
            </div>
            {isBagOpen && (
                <div className='absolute h-[298px] w-[220px] ml-[272px] mt-[80px] shadow-lg bg-white'>
                <div className='flex flex-col '> 
                    <img src={EmptyBag} alt="" className='ml-5 mt-10 h-[170px] w-[190px]'></img>
                    <h1 className='font-semibold text-neutral-500 ml-9'>Nothing in your bag!</h1>
                </div>              
            </div>
            )}
        </div>
        
        
            
     </div>
    </>
  )
}

export default Navigation