import { Link } from "react-router-dom";

import goBack from "../../assets/iconSidebar/goBack.svg";

import "../../styles/allHistoryUser/messageAllHistory.css";

export const MessageAllHistory = () => {
  return (
    <section className="section-message-all-history">
      <div className="titles-container-history">
        <div>
          <h1 className="title-history-transfer">History</h1>
        </div>
        <div className="container-goBack-btn">
          <Link to="/history">
            <button className="btn-goBack">
              <img src={goBack} alt="img" className="img-goBack" />
            </button>
          </Link>
        </div>
      </div>
      <hr className="s" />
    </section>
  );
};
