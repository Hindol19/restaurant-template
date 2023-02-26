import React from "react";
import "./About.css";

function About() {
  return (
    <div id="About" className="about_container">
      <div className="about_int_div">
        <div className="left">
          <img
            src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className="about_item"
          />
        </div>
        <div className="right about_item">
          <h1 className="about_head">ABOUT CUISINE CUCINA</h1>
          <div className="about_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
            lacus massa. Cras id consectetur est. Vivamus tristique diam sed
            purus viverra, ac facilisis tellus semper. Duis ac quam ut mi auctor
            ornare. Aliquam quis sem velit. Donec vitae elit ut ante congue
            scelerisque.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
