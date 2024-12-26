import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import userLinks from '../urls/UserLinks';
import Logout from './Logout';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 ">
    <div className="container flex justify-between items-center mx-auto px-4 w-full border border-gray-200">
      <div className="text-2xl font-semibold">
        <Link to="/">React App</Link>
      </div>
      <div className="hidden md:flex space-x-6">
        {userLinks.map((link) => (<Link
          key={link.path}
          to={link.path}
          className="hover:text-blue-500 p-2"
        >
          {link.label}
        </Link>))}
        <Logout/>
      </div>

      {/*toggle button*/}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="focus:outline-none text-gray-800"
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

    {/*mobile menu*/}

    {isOpen && (
      <div className="md:hidden fixed  w-full ml-1  ">
      <div className="flex flex-col items-start space-y-2 py-4 px-4">
        {userLinks.map((link) => (<Link
          key={link.path}
          to={link.path}
          className="hover:text-blue-500"
        >
          {link.label}
        </Link>))}
        <Logout/>
      </div>

    </div>)}
  </nav>);
};

export default Navbar;
