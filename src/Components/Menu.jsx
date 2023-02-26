import React from "react";
import MenuItems from "./MenuItems";
import MenuList from "./MenuList";
import "./Menu.css";
function Menu() {
  return (
    <div id="Menu" className="menu_container">
      <h1 className="menu_head">Our Menu</h1>
      <div className="menu">
        {MenuList.map((menuItem) => (
          <MenuItems link={menuItem.link} itemName={menuItem.title} />
        ))}

        {/* <MenuItems link={MenuList[0].link} itemName={MenuList[0].title} />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems /> */}
      </div>
    </div>
  );
}

export default Menu;
