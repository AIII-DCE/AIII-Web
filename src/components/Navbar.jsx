import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src='#' alt='Not Supported' />
      </div>
      <nav>
        <ul>
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