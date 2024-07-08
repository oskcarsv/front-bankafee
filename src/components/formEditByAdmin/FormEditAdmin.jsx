import { Link } from "react-router-dom";

import '../../styles/formEditUserByAdmin/formEditAdmin.css';

export const FormEditAdmin = () => {
    return (
        <main className="info-form-caccount-user">
            <section>
                <h1 className="title-edit-admin">Form Edit User - Admin</h1>
            </section>
            <form className="form-edit-by-admin">
                <div className="content-together-input-admin">
                    <input type="text" placeholder="Name User" className="input-together-admin" />
                    <input type="text" placeholder="Last Name" className="input-together-admin" />
                </div>
                <div className="content-alone-input-admin">
                    <input type="text" placeholder="Last Name" className="input-alone-admin" />
                </div>
                <div className="content-together-input-admin">
                    <input type="text" placeholder="Name" className="input-together-admin" />
                    <input type="text" placeholder="Last Name" className="input-together-admin" />
                </div>
                <div className="content-alone-input-admin">
                    <input type="text" placeholder="Last Name" className="input-alone-admin" />
                </div>
                <div className="content-alone-input-admin">
                    <input type="text" placeholder="Last Name" className="input-alone-admin" />
                </div>
            </form>
            <section className="section-btn-admin-edit">
                <div className="content-btn-edit-admin">
                    <Link to="/listUser" className="link-edit-admin">
                        <button className="btn-edit-admin cancel">Cancel</button>
                    </Link>
                </div>
                <div className="content-btn-edit-admin">
                    <Link to="/listUser" className="link-edit-admin">
                        <button className="btn-edit-admin">Save</button>
                    </Link>
                </div>
            </section>
        </main>
    );
};