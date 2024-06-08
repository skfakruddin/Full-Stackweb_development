import './Header.css'
import { Link } from 'react-router-dom';
function Header(){
    return(
        <div className='header'>
           <ul className='nav justify-content-end bg-secondary fs-4 '>
                <li className='nav-item'>
                    <Link to="" className='nav-link text-black'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to="register" className='nav-link text-black'>Register</Link>
                </li>
                <li className='nav-item'>
                    <Link to="login" className='nav-link text-black'>Login</Link>
                </li>
                <li className='nav-item'>
                    <Link to="users" className='nav-link text-black'>Users</Link>
                </li>
                <li className='nav-item'>
                    <Link to="parent" className='nav-link text-black'>Parent</Link>
                </li>
           </ul>
        </div>
    )
}
export default Header;