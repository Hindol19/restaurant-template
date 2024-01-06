import React from "react";
import "./Navbar3.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
const Navbar3 = () => {
  return (
    <>
      <div className="nav-bg"></div>
      <div className="nav-mid">
        <a className="nav-brand" href="#Home">
          Cuisine Cucina
        </a>
      </div>
      <nav className="nav-container">
        <div className="nav-left">
          <a href="#Home" className="nav-item left-item">
            Home
          </a>
          <a href="#About" className="nav-item left-item">
            About
          </a>
          <a href="#Menu" className="nav-item left-item">
            Menu
          </a>
          <a href="#Contact" className="nav-item left-item">
            Contact
          </a>
        </div>
        <div className="nav-right">
          <InstagramIcon className="nav-item nav-icon" />
          <TwitterIcon className="nav-item nav-icon" />
          <FacebookIcon className="nav-item nav-icon" />
        </div>
      </nav>
    </>
  );
};

export default Navbar3;
