import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
  return (
     <div className=''>
      <nav className='nav justify-content-md-between  d-flex flex-wrap p-1 align-items-center header  '>
        <ul>
          <h1 className='p-1 mt-1 text-sm-center' >Shopify</h1>
          </ul>
          <ul className='nav justify-content-between'>
          <li className='nav-item'>
            <Link to="home" className='nav-link text-white fs-4'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="register" className='nav-link text-white fs-4'>Register</Link>
          </li>
          <li className='nav-item'>
            <Link to="login" className='nav-link text-white fs-4 '>Login</Link>
          </li>
          <li className='nav-item'>
            <Link to="about" className='nav-link text-white fs-4'>AboutUs</Link>
          </li>
        </ul>
      </nav>
     </div>
  )
}

export default Header;