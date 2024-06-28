import { Link } from "react-router-dom";

import "../../styles/depositCss/depositCss.css";

export const DepositForm = () => {
  return (
    <section className="content-form-deposit">
      <div className="content-title-deposit">
        <h1 className="title-h1-deposit">Deposit</h1>
      </div>
      <div className="content-form-deposit">
        <form className="form-deposit">
          <div className="content-input-deposit">
            <input type="text" placeholder="Amount" className="text-deposit" />
          </div>
          <div className="content-input-deposit">
            <input
              type="text"
              placeholder="Account Number"
              className="text-deposit"
            />
          </div>
          <div className="content-btn-deposit">
            <Link to="/home" className="link-deposit">
              <button className="btn-deposit-cancel">Cancel</button>
            </Link>
            <Link to="/home" className="link-deposit">
              <button className="btn-deposit">Deposit</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
