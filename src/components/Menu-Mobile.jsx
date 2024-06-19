import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cancelIcon from "../assets/iconLanding/Cancel-Icon.svg";
import signInIcon from "../assets/iconLanding/SignIn-Icon.svg";
import aboutUsIcon from "../assets/iconLanding/AboutUs-Icon.svg";
import servicesIcon from "../assets/iconLanding/Services-Icon.svg";
import homeIcon from "../assets/iconAbout/HomeIconMobile.svg";
import "../styles/landingPagesCss/menu-mobile.css";

export const MenuMobile = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const currentPath = window.location.pathname;

  return (
    <div className="menu-mobile">
      <img
        src={cancelIcon}
        alt="Cancel Icon"
        className="cancel-icon"
        onClick={onClose}
      />
      <ul className="menu-mobile-ul">
        <li className="menu-mobile-li">
          <img src={signInIcon} alt="Sign In Icon" className="sign-in-icon" />
          <p className="menu-mobile-p">Sign In</p>
        </li>
        <li>
          {currentPath === "/aboutUs" ? (
            <Link to="/" className="menu-mobile-li">
              <img src={homeIcon} alt="Home Icon" />
              <p className="menu-mobile-p">Home</p>
            </Link>
          ) : (
            <Link to="/aboutUs" className="menu-mobile-li">
              <img
                src={aboutUsIcon}
                alt="About Us Icon"
                className="about-us-icon"
              />
              <p className="menu-mobile-p">About us</p>
            </Link>
          )}
        </li>
        <li className="menu-mobile-li">
          <img
            src={servicesIcon}
            alt="Services Icon"
            className="services-icon"
          />
          <p className="menu-mobile-p">Services</p>
        </li>
      </ul>
    </div>
  );
};
