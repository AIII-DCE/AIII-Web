import React from 'react'

const Navbar = () => {
  return (
    <header className='flex flex-row justify-between p-6'>
      <nav className='flex justify-between items-center w-[92%] mx-auto'>

        <div>
          <img src='#' className='w-16' alt='...' />
        </div>
        
        <div className='md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'> 
          <ul className='flex md:flex-row flex-col md:items-center md:gap-4 gap-8'>
            <li><a className='hover:text-gray-500' href='#'>Home</a></li>
            <li><a className='hover:text-gray-500' href='#'>Events</a></li>
            <li><a className='hover:text-gray-500' href='#'>Dashboard</a></li>
            <li><a className='hover:text-gray-500' href='#'>Blogs</a></li>
            <li><a className='hover:text-gray-500' href='#'>Contact</a></li>
          </ul>
        </div>

        <div>
          <button className='bg-[#A6C1EE] text-white px-5 py-2 rounded-full hover:bg-[#87ACEC]'>Login</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar