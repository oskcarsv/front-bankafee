import { Link } from "react-router-dom";
import { Logo } from "./landingPages/Logo.jsx";
import { BtnSignIn } from "./landingPages/Btn-SignIn.jsx";
import { HamburgerMenu } from "./Hamburger-Menu.jsx";

import "../styles/landingPagesCss/nav.css";

export const Nav = () => {
  const currentPath = window.location.pathname;

  return (
    <nav className="nav-landing">
      <Logo />
      <h1 className="h1-nav">BankAfee</h1>
      <HamburgerMenu />
      <ul className="nav-landing-ul">
      <li className="nav-landing-li">
          <Link to="/requestAccount" className="nav-landing-link">
            Request Account
          </Link>
        </li>
        <li className="nav-landing-li">
          <Link to="/aboutUs" className="nav-landing-link">
            {currentPath === "/aboutUs" ? (
              <Link to="/" className="nav-landing-link">
                Home
              </Link>
            ) : (
              "About us"
            )}
          </Link>
        </li>
        <li className="nav-landing-li">
          <Link to="/service" className="nav-landing-link">
            {currentPath === "/service" ? (
              <Link to="/" className="nav-landing-link">
                Home
              </Link>
            ) : (
              "Services"
            )}
          </Link>
        </li>
        <BtnSignIn />
      </ul>
    </nav>
  );
};
