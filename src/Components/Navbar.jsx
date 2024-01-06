import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <div className="nav-bg">u</div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="./">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  Reservations
                </a>
              </li>
            </ul>
          </div>
          <h1 className="Heading">Cuisune Cucina</h1>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
