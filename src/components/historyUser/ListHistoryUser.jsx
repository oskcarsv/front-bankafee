import { Link } from "react-router-dom";

import historyAll from "../../assets/iconHistoryList/historyAll.svg";

import "../../styles/historyUser/listHistoryUser.css";

export const ListHistoryUser = () => {
  return (
    <div className="content-list-history">
      <div className="card-history-all">
        <Link to="/home" className="link-history-transfer">
          <img src={historyAll} alt="icon" className="icon-history-list" />
          <p className="title-list-card-history">Pending transfer history</p>
        </Link>
      </div>
      <div className="card-history-all">
        <Link to="/home" className="link-history-transfer">
          <img src={historyAll} alt="icon" className="icon-history-list" />
          <p className="title-list-card-history">Pending deposit history</p>
        </Link>
      </div>
      <div className="card-history-all">
        <Link to="/home" className="link-history-transfer">
          <img src={historyAll} alt="icon" className="icon-history-list" />
          <p className="title-list-card-history">Pending credit history</p>
        </Link>
      </div>
    </div>
  );
};
