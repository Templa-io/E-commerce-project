import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
      <div className=" bg-white py-3 shadow-sm w-screen">
        <div className="container flex gap-1 justify-between">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
   
            <ul className=" mb-2  text-[#999999] flex font-semibold justify-start ">
              <li>
                <Link
                  className="hover:bg-[#FFE8A9] no-underline px-4 p-2 text-[#999999]"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li >
                <Link className=" hover:bg-[#FFE8A9] no-underline px-4 p-2 text-[#999999]">
                  Products
                </Link>
              </li>
              <li >
                <Link className=" hover:bg-[#FFE8A9] no-underline px-4 p-2 text-[#999999]">
                  About
                </Link>
              </li>
              <li >
                <Link className=" hover:bg-[#FFE8A9] no-underline px-4 p-2 text-[#999999]">
                  Contact
                </Link>
              </li>
            </ul>
  <Link className="nav-item nav-item  hover:bg-[#FFE8A9] no-underline font-extrabold px-4 p-2 text-black " >
              LA COLLECTION
            </Link>
            <div classname="buttons">
              <Link to="/login" className="btn bg-light ms-2">
                <i className="fa fa-sign-in me-1"></i>Login
              </Link>
              <Link to="/register" className="btn bg-light ms-2">
                <i className="fa fa-heart"></i>(0){" "}
              </Link>
              <Link to="/cart" className="btn bg-light ms-2">
                <i className="fa fa-cart-arrow-down me-1"></i>Cart (0){" "}
              </Link>
              <Link to="/search" className="btn  ms-2 bg-light">
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </div>
     
        </div>
      </div>
    
  );
}

export default Navbar;
