import "./Header.css";
import { Link } from "react-router-dom";

import { userLoginContext } from "../../contexts/userLoginContext";
import { useContext } from "react";

function Header() {
  let { logoutUser, userLoginStatus } = useContext(userLoginContext);

  return (
    <div className="d-flex flex-wrap justify-content-between header">
      <h1 className="mt-3  mx-5">
        Shopsy
      </h1>
      <ul className="nav fs-5 p-3">
        <li className="nav-item">
          <Link to="/home" className="nav-link text-white">
             Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="register" className="nav-link text-white">
            
            Register
          </Link>
        </li>
        {userLoginStatus === false ? (
          <li className="nav-item">
            <Link to="login" className="nav-link text-white">
             
              Login
            </Link>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="login" className="nav-link text-white" onClick={logoutUser}>
             
              Logout
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link to="about" className="nav-link text-white">
            
            AboutUs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="products" className="nav-link text-white">
            
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
