import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { navbarData } from "../../Constant";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //---------navbar Shadow start-----
  const navbarRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (navbarRef) {
        if (window.scrollY > 0) {
          navbarRef.current.style.boxShadow = "-5px 10px 10px rgba(0,0,0,0.2)";
        } else {
          navbarRef.current.style.boxShadow = "none";
        }
      }
    });
  });
  //---------navbar Shadow end-----

  const renderMenuTablet = () => {
    if (isMenuOpen) {
      return (
        <div className="dropMenu">
          {navbarData.map((item) => (
            <a href={item.hrefKey} className="navbarTxt" onClick={toggleMenu}>
              {item.title}
            </a>
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
      <div className="containerNavbar" ref={navbarRef}>
        <div className="logoTxt">ADITYA</div>
        <div className="innerTxtdiv">
          {navbarData.map((item) => (
            <a href={item.hrefKey} className="navbarTxt">
              {item.title}
            </a>
          ))}
        </div>
        <p className="menuTxt" onClick={toggleMenu}>
          MENU
        </p>
      </div>
    );
  };

  return (
    <div className="navabrMain">
      {renderMenu()}
      {renderMenuTablet()}
    </div>
  );
}
