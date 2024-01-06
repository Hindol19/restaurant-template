import React from "react";
import "./NavbarMob.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
const NavBox = () => {
  return (
    <div className="navBox-container">
      <div className="nav-upper">
        <a href="#Home" className="navMob-item">
          Home
        </a>
        <a href="#About" className="navMob-item">
          About
        </a>
        <a href="#Menu" className="navMob-item">
          Menu
        </a>
        <a href="#Contact" className="navMob-item">
          Contact
        </a>
      </div>
      <div className="nav-lower">
        <InstagramIcon className="navMob-item navMob-icon" />
        <TwitterIcon className="navMob-item navMob-icon" />
        <FacebookIcon className="navMob-item navMob-icon" />
      </div>
    </div>
  );
};

const NavbarMob = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  console.log(isOpen);

  return (
    <>
      {isOpen && <NavBox />}

      <div className="nav-bg"></div>
      <div className="nav-mid">
        <a className="nav-brand" href="#Home">
          Cuisine Cucina
        </a>
      </div>
      <div className="navbarMob-container">
        <div className="ham-icon">
          {isOpen ? (
            <CloseIcon className="ham" onClick={handleClick} />
          ) : (
            <MenuIcon className="ham" onClick={handleClick} />
          )}
        </div>
      </div>
    </>
  );
};

export default NavbarMob;
