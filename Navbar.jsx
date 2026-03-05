import React from 'react'

function Navbar() {
  return (
    <nav className="navbar bg-white shadow px-4 md:px-10 sticky top-0 z-50">

      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

  
        <h1 className="text-lg md:text-xl font-bold whitespace-nowrap ml-2 lg:ml-0">
          CS — Ticket System
        </h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 text-sm px-1">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

 
      <div className="navbar-end">
        <button className="btn btn-primary btn-sm flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
    
          <span className="hidden sm:inline">New Ticket</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
