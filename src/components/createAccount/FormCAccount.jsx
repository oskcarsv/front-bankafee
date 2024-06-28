import { Link } from "react-router-dom";

import cAccountByUser from "../../assets/iconCAccountByUser/cAccountByUser.svg";

import '../../styles/createAccountByUser/cAccountByUser.css'

export const FormCAccount = () => {
    return (
        <main className="info-form-caccount-user">
            <section className="img-caccount">
                <img src={cAccountByUser} alt="img" className="img-caccount-user" />
                <h1 className="title-create-account">Create Account</h1>
            </section>
            <form className="form-caccount-user">
                <div className="input-text-create-account">
                    <input type="text" className="input-text" placeholder="Alias" />
                    <input type="text" className="input-text" placeholder="Monthly" />
                </div>
                <div className="content-input-dpi">
                    <input type="text" className="input-text-dpi" placeholder="DPI" />
                </div>
                <div className="box-select-container">
                    <select className="box-select">
                        <option value="">Monetaria</option>
                        <option value="">Ahorro</option>
                    </select>
                </div>
            </form>
            <section className="container-btn-account">
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