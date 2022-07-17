import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link Active" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <Link className="navbar-brand fw-bold fs-4 mx-auto" to="/home">
              LA COLLECTION
            </Link>
            <div classname="buttons">
              <Link to="/login" className="btn bg-light ms-2">
                <i className="fa fa-sign-in me-1"></i>Login{" "}
              </Link>
              <Link to="/register" className="btn bg-light ms-2">
                <i class="fa fa-heart"></i>(0){" "}
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
      </nav>
    </div>
  );
}

export default Navbar;
