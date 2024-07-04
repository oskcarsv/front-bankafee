import { Link } from "react-router-dom";

import "../../styles/serviceHomPage/titleService.css";

export const TitleService = () => {
  return (
    <div className="section-service-title">
      <div className="content-titles">
        <div>
          <h1 className="title-service-home">Service </h1>
        </div>
        <div className="content-btn">
          <button className="btn-back">
            <Link to="/home" className="link-back">
              <p className="text-back">Home</p>
            </Link>
          </button>
        </div>
      </div>
      <hr className="s" />
    </div>
  );
};
