import React, { useState, useEffect } from "react";
import HamburgerIcon from "../assets/iconLanding/Hamburger-icon.svg";
import { MenuMobile } from "./Menu-Mobile";

export const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="hamburger-icon">
      <img src={HamburgerIcon} alt="Hamburger Icon" onClick={handleClick} />
      {isMenuOpen && <MenuMobile onClose={handleClose} />}
    </div>
  );
};