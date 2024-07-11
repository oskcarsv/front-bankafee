import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../shared/hooks/useAuth";

import logo from "../../assets/iconLanding/logo.svg";
import perfil from "../../assets/iconSidebar/perfil.svg";
import editUser from "../../assets/iconSidebar/editUser.svg";
import createAccount from "../../assets/iconSidebar/createAccount.svg";
import history from "../../assets/iconSidebar/history.svg";
import logoutIcon from "../../assets/iconSidebar/logout.svg";
import home from "../../assets/iconSidebar/home.svg";
import { HamburgerMenuUser } from "../Hamburger-Menu-User";

import "../../styles/homePageCss/sidebar.css";

export const Sidebar = () => {
  const currentPath = window.location.pathname;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const { logout } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="sidebar">
      <section className="content-img-logo">
        <div className="header-homepage">
          <img src={logo} alt="img" className="img-sidebar-bankafee" />
          {isMobile && <h2 className="title-mobile">Welcome to BankAfee</h2>}
          <h1 className="text-logo">Bankafee</h1>
          <HamburgerMenuUser />
        </div>
      </section>

      <section className="profile-container-all">
        <div className="content-info-profile">
          <img src={perfil} alt="img" className="img-perfil-sidebar" />
          <div className="name-container">
            <h1 className="name-profile">Angel Mendez</h1>
            <Link to="/editUser">
              <img src={editUser} alt="icon" className="icon-edit-user" />
            </Link>
          </div>
          <h2 className="email-profile">amendez@gmail.com</h2>
        </div>
        <div className="content-sidebar-menu-btn">
          <Link to="/cAccountByUser" className="btn-home-sidebar">
            <button className="sidebar-menu-button">
              Create{" "}
              <img
                src={createAccount}
                alt="icon"
                className="icon-create-account"
              />
            </button>
          </Link>
          <Link to="/history" className="btn-home-sidebar">
            {currentPath === "/history" ? (
              <Link to="/home" className="btn-home-sidebar">
                <button className="sidebar-menu-button">
                  Home
                  <img src={home} alt="icon" className="icon-history" />
                </button>
              </Link>
            ) : (
              <button className="sidebar-menu-button">
                History
                <img src={history} alt="icon" className="icon-history" />
              </button>
            )}
          </Link>
        </div>
      </section>
      <div className="content-logout-sidebar-btn">
        <Link to="/">
          <button className="sidebar-menu-button-logout" onClick={logout}>
            <img src={logoutIcon} alt="img" className="img-sidebar-logout" />
          </button>
        </Link>
      </div>
    </div>
  );
};
