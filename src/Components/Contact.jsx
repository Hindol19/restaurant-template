import React from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_container">
      <div className="top">
        <div data-aos="fade-right" className="leftImg contact_img">
          <div className="leftImgText">Our Special 1</div>
        </div>
        <div data-aos="fade-left" className="rightImg contact_img">
          <div className="rightImgText">Our Special 2</div>
        </div>
      </div>

      <div id="Contact" className="bottom">
        <h1 className="contact_head">We Appriciate your feedback :)</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
