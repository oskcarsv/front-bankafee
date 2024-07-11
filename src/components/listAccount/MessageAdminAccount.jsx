import { Link } from "react-router-dom";

import homeMessage from "../../assets/iconSidebar/homeMessage.svg";

import "../../styles/listAccountAdmin/messageAdminAccount.css";

export const MessageAdminAccount = () => {
  return (
    <section className="section-message-account-admin">
      <div className="container-general-message">
        <div>
          <h1 className="title-message-account-admin">Accounts</h1>
        </div>
        <div className="container-btn-back-account">
          <Link to="/homeAdmin">
            <button className="btn-goBack-admin">
              <img src={homeMessage} alt="img" className="img-goBack-admin" />
            </button>
          </Link>
        </div>
      </div>
      <hr className="s" />
    </section>
  );
};
