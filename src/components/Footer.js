import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer
        className="bg-light text-center text-lg-start"
        style={{ position: "fixed", left: "0", bottom: "0", right: "0" }}
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-dark">PodcastPost.com</a>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
};

export default Footer;
