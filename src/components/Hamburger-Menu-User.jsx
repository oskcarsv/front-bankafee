import React, { useState } from "react";
import HamburgerIconUser from "../assets/iconHomePage/Hamburger-Icon-User.svg";
import { MenuMobileUser } from "./Menu-Mobile-User.jsx";

export const HamburgerMenuUser = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="hamburger-icon-user">
      <img src={HamburgerIconUser} alt="Hamburger Icon" onClick={handleClick} />
      {isMenuOpen && <MenuMobileUser onClose={handleClose} />}
    </div>
  );
};
