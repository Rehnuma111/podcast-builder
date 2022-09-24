import { TextField } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer className="bg-light text-center text-lg-start" >
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