import SideNavbar from '../shared/components/SideNavbar';
import {Outlet} from 'react-router-dom';
import React, {useState} from 'react';
import Footer from '../shared/components/Footer';


const AdminLayout = () => {
  const [visible, setVisible] = useState(true)
  const toggle=()=>{
  setVisible(!visible);
  }
  return (
    <div className='flex flex-col justify-between h-screen'>
      <div className='flex justify-between p-4'>
        <div >
        header
        </div>
        <div className="">
          <button
            className="focus:outline-none text-gray-800"
            onClick={toggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex h-screen">
        {visible && <SideNavbar/>}
        <div className="flex-1 p-8  overflow-auto">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default AdminLayout;
