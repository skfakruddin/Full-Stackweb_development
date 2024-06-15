import { Link, Outlet } from 'react-router-dom';
import React from 'react'
function Tech(){
    return <div>
      
           <ul className='nav justify-content-center bg-white fs-4 '>
                <li className='nav-item'>
                    <Link to="java" className='nav-link text-black'>Java</Link>
                </li>
                <li className='nav-item'>
                    <Link to="node" className='nav-link text-black'>NodeJs</Link>
                </li>
                <li className='nav-item'>
                    <Link to="vue" className='nav-link text-black'>VueJs</Link>
                </li>
                
           </ul>
           <Outlet />
        </div>
}
export default Tech;