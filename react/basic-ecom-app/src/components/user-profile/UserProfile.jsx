import React from 'react'
import { useContext } from 'react'
import { userLoginContext } from '../../contexts/userLoginContext'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { CiEdit } from "react-icons/ci";
import './UserProfile.css'



function UserProfile() {
  let {currentUser} =useContext(userLoginContext)
  let navigate = useNavigate() 
  function onEditUser(){
    navigate('../edit-user');
  }
 
  
  return (
    <div className='profile'>
    <div className='text-end text-end p-3'>
    <img
          src={currentUser.profileImage}
          width="75px"
          alt=""
          className="rounded-circle"
        />
              <h1 className=''>{currentUser.username}  <CiEdit className='text-warning fs-2' onClick={onEditUser} /></h1>
    </div>
    <ul className="nav fs-5 p-3 justify-content-around my-2">
        <li className="nav-item">
          <Link to="products" className="nav-link text-info fs-4 text-decoration-underline">
             Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="cart" className="nav-link text-info fs-4 text-decoration-underline">
                   Cart
          </Link>
        </li>
        
      </ul>
      <div>
      <Outlet/>
      </div>
    </div>
  )
}

export default UserProfile