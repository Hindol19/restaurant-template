import React from "react";
import "./MenuItems.css";
function MenuItems({ link, itemName }) {
  return (
    <div
      data-aos="fade-up"
      className="menuItems_container"
      style={{
        background: `url(${link}) center center/cover`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="strip">{itemName}</div>
    </div>
  );
}

export default MenuItems;
