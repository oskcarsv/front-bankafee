import { Link } from "react-router-dom";

import "../../styles/editUser/editUser.css";


export const FormEditUser = () => {
  return (
    <main className="content-form-edit-user">
      <section className="title-form-edit-user">
        <h1 className="title-edit-user">Edit User</h1>
      </section>
      <div className="content-input-edit-user">
        <form className="form-editUser">
          <div className="input-together-edit">
            <input
              type="text"
              placeholder="Name"
              className="input-text-edit-user"
            />
            <input
              type="text"
              placeholder="User Name"
              className="input-text-edit-user"
            />
          </div>
          <div className="input-alone-edit-user">
            <input
              type="password"
              placeholder="Password"
              className="input-text-alone-edit-user"
            />
          </div>
          <div className="input-alone-edit-user">
            <input
              type="text"
              placeholder="Address"
              className="input-text-alone-edit-user"
            />
          </div>
          <div className="input-together-edit">
            <input
              type="text"
              placeholder="Email"
              className="input-text-edit-user"
            />
            <input
              type="text"
              placeholder="Cel"
              className="input-text-edit-user"
            />
          </div>
          <div className="input-alone-edit-user">
            <input
              type="text"
              placeholder="Workplace"
              className="input-text-alone-edit-user"
            />
          </div>
          <div className="input-alone-edit-user">
            <input
              type="text"
              placeholder="Monthly Income"
              className="input-text-alone-edit-user"
            />
          </div>
        </form>
      </div>
      <section className="container-btn-account editUser">
        <div className="btn-container-cAccount">
          <Link to="/home" className="link-btn-caccount">
            <button className="btn-account cancel">Cancel</button>
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
