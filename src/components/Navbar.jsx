import React from 'react'

const Navbar = () => {
  return (
    <header className='flex flex-row justify-between p-6'>
      <div className="logo">
        <img src='#' alt='Not Supported' />
      </div>
      <nav>
        <ul className='flex flex-row space-x-8'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#contact'>Contact</a></li>
          <li><a href='#blogs'>Blogs</a></li>
          <li><a href='#events'>Events</a></li>
          <li><a href='#dashboard'>Dashboard</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar