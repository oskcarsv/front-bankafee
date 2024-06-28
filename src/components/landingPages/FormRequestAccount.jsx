import { Link } from "react-router-dom";

import "../../styles/requestAccount/formRequestAccount.css";

export const FormRequestAccount = () => {
  return (
    <section className="section-form-request-account">
      <div className="content-form-request">
        <div className="content-title-request">
          <h1 className="title-request-account">Request Account</h1>
        </div>
        <div className="section-form-request-account">
          <form className="form-request">
            <div className="input-request-together">
              <input
                type="text"
                placeholder="Name"
                className="input-text-request-account"
              />
              <input
                type="text"
                placeholder="User Name"
                className="input-text-request-account"
              />
            </div>
            <div className="input-request-alone">
              <input
                type="text"
                placeholder="DPI"
                className="input-text-alone-request"
              />
            </div>
            <div className="input-request-alone">
              <input
                type="text"
                placeholder="Address"
                className="input-text-alone-request"
              />
            </div>
            <div className="input-request-together">
              <input
                type="text"
                placeholder="Email"
                className="input-text-request-account"
              />
              <input
                type="text"
                placeholder="Cel"
                className="input-text-request-account"
              />
            </div>
            <div className="input-request-alone">
              <input
                type="text"
                placeholder="Workplace"
                className="input-text-alone-request"
              />
            </div>
            <div className="input-request-alone">
              <input
                type="text"
                placeholder="Monthly Income"
                className="input-text-alone-request"
              />
            </div>
          </form>
        </div>
        <div className="content-btn-request">
          <Link to="/" className="link-btn-request-account">
            <button className="btn-account-cancel">Cancel</button>
          </Link>
          <Link to="/" className="link-btn-request-account">
            <button className="btn-request-account">Request</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
