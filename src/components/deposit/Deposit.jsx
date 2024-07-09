import { Link } from "react-router-dom";

import "../../styles/depositCss/depositCss.css";

export const DepositForm = () => {
  return (
    <main className="content-form-deposit">
      <section className="content-title-deposit">
        <h1 className="title-h1-deposit">Deposit</h1>
      </section>
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
      </form>
      <section className="container-btn-deposit">
        <div className="btn-container-cAccount">
          <Link to="/home" className="link-btn-caccount">
            <button className="btn-account cancel deposit">Cancel</button>
          </Link>
        </div>
        <div className="btn-container-cAccount">
          <Link to="/home" className="link-btn-caccount">
            <button className="btn-account">Create</button>
          </Link>
        </div>
      </section>
    </main>
  );
};
