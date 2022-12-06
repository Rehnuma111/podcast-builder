import { NavLink } from "react-router-dom";
// import React, { useState } from "react";
const Header = () => {
  return (


    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        {/* Container wrapper */}
        <div className="container">
          {/* Toggle button */}
          <>
            {/* Navbar brand */}
            <NavLink to="/home">
              <a className="navbar-brand me-2" href="">
                <img
                  src="https://play-lh.googleusercontent.com/vPolbKkiyhKOKD6PY4d4w_qcXFSHRs2TAE4Txw7FWpo-03h5O7xbECqrUWKjY7Tz20tP=w240-h480-rw"
                  height={36}
                  alt="logo"
                  loading="lazy"
                  style={{ marginTop: "-1px" }}
                />
              </a>
            </NavLink>
          </>


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
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 " >

              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/publish">Publish</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/podcasts">Podcasts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Signup</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/managepodcast">Manage Podcast</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/manageuser">Manage User</NavLink>
              </li>
            </ul>
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