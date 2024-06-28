import { Link } from "react-router-dom";

import "../../styles/createUser/createUser.css";

export const FormCreateUser = () => {
  return (
    <section className="section-form-create-user">
      <div className="content-form-create-user">
        <div className="content-title-create">
          <h1 className="title-create">Create User</h1>
        </div>
        <div className="content-info-form">
          <form className="form-create-user">
            <div className="input-together-create">
              <input
                type="text"
                placeholder="Name"
                className="input-text-create-user"
              />
              <input
                type="text"
                placeholder="User Name"
                className="input-text-create-user"
              />
            </div>
            <div className="input-alone-create">
              <input
                type="text"
                placeholder="Password"
                className="input-text-alone"
              />
            </div>
            <div className="input-alone-create">
              <input
                type="text"
                placeholder="Address"
                className="input-text-alone"
              />
            </div>
            <div className="input-together-create">
              <input
                type="text"
                placeholder="Email"
                className="input-text-create-user"
              />
              <input
                type="text"
                placeholder="Cel"
                className="input-text-create-user"
              />
            </div>
            <div className="input-alone-create">
              <input
                type="text"
                placeholder="Workplace"
                className="input-text-alone"
              />
            </div>
            <div className="input-alone-create">
              <input
                type="text"
                placeholder="Monthly Income"
                className="input-text-alone"
              />
            </div>
            <div className="input-alone-create">
              <input
                type="text"
                placeholder="type account"
                className="input-text-alone"
              />
            </div>
          </form>
        </div>
        <div className="content-btn-create-user">
          <Link to="/home" className="link-btn-create-user">
            <button className="btn-create-user">Create</button>
          </Link>
          <Link to="/home" className="link-btn-create-user">
            <button className="btn-cancel-create-user">Cancel</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
