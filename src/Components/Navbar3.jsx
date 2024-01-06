import React from "react";
import "./Navbar3.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
const Navbar3 = () => {
  return (
    <div>
      <div className="nav-bg" data-aos="fade-down"></div>
      <div className="nav-mid" data-aos="fade-down" data-aos-duration="1000">
        <a className="nav-brand" href="#Home">
          Cuisine Cucina
        </a>
      </div>
      <nav className="nav-container">
        <div
          className="nav-left"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
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
        <div
          className="nav-right"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
          <InstagramIcon className="nav-item nav-icon" />
          <TwitterIcon className="nav-item nav-icon" />
          <FacebookIcon className="nav-item nav-icon" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar3;
