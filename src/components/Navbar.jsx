import React, { useState } from 'react'
import Button from './Button';
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar = () => {
  const links = [
    {name:"HOME",link:"/"},
    {name:"ABOUT US",link:"/"},
    {name:"CONTACT",link:"/"},
    {name:"EVENTS",link:"/"},
    {name:"DASHBOARD",link:"/"},
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] texxt-gray-800'>
        <span className='text-3x1 text-indigo-600 mr-1 pt-2'>
        </span>
        <img src='#' alt='...' />
      </div>
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer  md:hidden'>
        <GiHamburgerMenu size={20} />
      </div>
      <ul className={`md:flex md:items-center md:pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
      ${open ? 'top-20':'top-[-490px]'}`}>
        {
          links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button>
          Login
        </Button>
      </ul>
      </div>
    </div>
  )

}

export default Navbar