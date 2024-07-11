import { Link } from "react-router-dom";
import { useAuth } from "../shared/hooks/useAuth";

import logo from "../assets/iconLanding/logo.svg";
import logoutIcon from "../assets/iconSidebar/logout.svg";

import "../styles/sidebarAdmin.css";

export const SidebarAdmin = () => {
  const { logout } = useAuth();

  return (
    <div className="sidebar-admin">
      <section className="section-img-logo-admin">
        <div className="header-homepage-admin">
          <img src={logo} alt="img" className="img-bankafee-admin" />
          <h1 className="title-logo-admin">Bankafee</h1>
        </div>
      </section>
      <section className="section-actions-admin">
        <div className="content-btn-admin">
          <Link to="/deposit" className="link-content-btn">
            <button className="btn-action-admin">Deposit</button>
          </Link>
        </div>
      </section>
      <div className="content-logout-admin">
        <Link to="/">
          <button className="btn-logout-for-admin" onClick={logout}>
            <img src={logoutIcon} alt="img" />
          </button>
        </Link>
      </div>
    </div>
  );
};
