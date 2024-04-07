import React from 'react'

const admin_sidebar = ( {setActiveOption} ) => {

  const options = [
    "Dashboard", "Products", "Product Details", "Add Products", 
    "Customers", "Orders", "Order details", "Artisans", "Grievances","Feedback","Manage Admins","Log-out"
  ];

  return (
    <>
    <div className='h-max w-1/5 bg-[#8f1434] shadow-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-white -mt-[729px]'>

    {options.map((option, index) => (
        <div key={index} onClick={() => setActiveOption(option)} className="cursor-pointer py-4 px-6 text-sm font-semibold tracking-wide border-b border-white hover:tracking-widest">
          {option}
        </div>
      ))}
      
    </div>
    </>
  )
}

export default admin_sidebar