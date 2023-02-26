import React from "react";
import Button from "./Button";

import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contactForm_container">
      
      <form className="contact_form" action="">
        <input
          className="form_item"
          type="text"
          placeholder="Enter your name"
        />
        <input
          className="form_item"
          type="text"
          placeholder="Enter your e-mail"
        />
        <input className="form_item" type="text" placeholder="Enter Message" />
        <Button />
      </form>
    </div>
  );
}

export default ContactForm;
