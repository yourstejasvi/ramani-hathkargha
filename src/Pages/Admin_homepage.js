import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Logo from "../Assets/Ramani-logo.png"
import AdminSidebar from "../components/admin_sidebar.jsx";
import DashboardDisplay from "../components/admin_dashboard_display.jsx";

const Admin_homepage = () => {
    const [activeOption, setActiveOption] = useState(null);

  

  return (
    <div className='overflow-hidden'>
    <nav className='h-24 shadow-md flex flex-row justify-between items-center'>
        <img src={Logo} className='cursor-pointer h-14 ml-14 mt-3' />
        

    </nav>
    <DashboardDisplay slide={activeOption} /> 
    <AdminSidebar setActiveOption={setActiveOption} />
    </div>
  )
}

export default Admin_homepage