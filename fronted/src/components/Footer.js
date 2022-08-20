import { TextField } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>

            <footer className="bg-light text-center text-lg-start" >
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    <form action="">
                        {/*Grid row*/}
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-auto mb-4 mb-md-0">
                                <p className="pt-2">
                                    <h4>Sign up for our newsletter</h4>
                                </p>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-md-5 col-12 mb-4 mb-md-0">
                                {/* Email input */}
                                <div className="form-outline mb-4">

                                    <TextField style={{ width: "100%", marginBottom: "2rem" }} label="Email" variant="outlined"
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                    />
                                </div>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-auto mb-4 mb-md-0">
                                {/* Submit button */}
                                <button type="submit" className="btn  p-3 ml-5 w-100 "  style={{backgroundColor:"#9c27b0", color:"white"}}>
                                    Subscribe
                                </button>
                            </div>
                            {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                    </form>
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2020 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">
                        MDBootstrap.com
                    </a>
                </div>
                {/* Copyright */}
            </footer>







        </>
    )
}

export default Footer;