import { NavLink } from "react-router-dom";
import React, { useState } from "react";
const Header = () => {
  return (


    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
        
            {/* <img
              src="https://www.vectorstock.com/royalty-free-vector/podcast-logo-logo-vector-29637980"
              height={16}
           
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          */}
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse d-flex justify-content-around " id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addpodcast">Addpodcast</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/allListpodcast">ALLlistpodcast</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Signup</NavLink>
              </li>

            </ul>
            {/* Left links */}
            <div className="d-flex align-items-center">
              
              <button type="button" class="btn btn-link px-3 me-2" >
                Login
              </button>
              <button type="button" className="p-2 me-3"style={{backgroundColor:"#9c27b0", color:"white",border:"none",borderRadius:"3px"}}>
                Sign up for free
              </button>
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Header;