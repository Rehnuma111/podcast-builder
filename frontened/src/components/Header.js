import { NavLink } from "react-router-dom";
// import React, { useState } from "react";
const Header = () => {
  return (
    // <section>
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/home">Home</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/publish">Publish</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/podcasts">Podcasts</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/login">Login</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/signup">Signup</NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // // </section>

   <>
   <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* Container wrapper */}
    <div className="container">
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
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

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
          </ul>
        </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

   </> 
  );
};

export default Header;