import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
function Footer() {
  return (
    <div className="footer_container">
      <div className="foot_col1 foot_col">
        <button className="footer_button">Contact Us</button>
      </div>
      <div className="foot_col2 foot_col">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Menu">Our Menu</a>
        <a href="">Meet Our Chef</a>
      </div>
      <div className="foot_col3 foot_col">
        <InstagramIcon className="icon" />
        <TwitterIcon className="icon" />
        <FacebookIcon className="icon" />
      </div>
    </div>
  );
}

export default Footer;
