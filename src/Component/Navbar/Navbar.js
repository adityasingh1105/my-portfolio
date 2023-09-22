import React, { useState } from "react";
import "./Navbar.css";
import { navbarData } from "../../Constant";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderMenuTablet = () => {
    if (isMenuOpen) {
      return (
        <div className="dropMenu">
          {navbarData.map((item) => (
            <div onClick={() => console.log("")} className="navbarTxt">
              {item.title}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const renderMenu = () => {
    return (
      <div className="containerNavbar">
        <div className="logoTxt">CLYDE</div>
        <div className="innerTxtdiv">
          {navbarData.map((item) => (
            <div onClick={() => console.log("")} className="navbarTxt">
              {item.title}
            </div>
          ))}
        </div>
        <div className="menuTxt" onClick={toggleMenu}>
          MENU
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderMenu()}
      {renderMenuTablet()}
    </div>
  );
}
