import { Link } from "react-router-dom";

import '../../styles/creditRequest/creditRequest.css';

export const FormCreditRequest = () => {
    return (
        <main className="info-form-caccount-user">
            <section className="img-caccount">
                <h1 className="title-create-account">Credit Request</h1>
            </section>
            <form className="credit-request-form">
                <div className="input-container-creditRequest">
                    <input type="text" className="input-text noAccount" placeholder="No. Account" />
                </div>
                <div className="input-container-creditRequest">
                    <input type="number" className="input-text amount" placeholder="Amount" />
                    <select className="box-select credit-request">
                        <option value="">Select</option>
                        <option value="">3 months</option>
                        <option value="">6 months</option>
                        <option value="">12 months</option>
                    </select>
                </div>
                <div className="text-area-container">
                    <textarea className="input-text reazon" placeholder="Reazon"></textarea>
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
    )
};