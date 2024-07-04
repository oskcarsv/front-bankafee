import { Link } from "react-router-dom";

import homeMessage from "../../assets/iconSidebar/homeMessage.svg";

import '../../styles/listAdminCredit/messageCreditAdmin.css';

export const MessageAdminCredit = () => {
    return (
        <section className="section-message-credit-admin">
            <div className="container-general-message">
                <div>
                    <h1 className="title-message-credit-admin">Credits</h1>
                </div>
                <div className="container-btn-back-credit">
                    <Link to="/homeAdmin">
                        <button className="btn-goBack-admin">
                            <img src={homeMessage} alt="img" className="img-goBack-admin" />
                        </button>
                    </Link>
                </div>
            </div>
            <hr className="s" />
        </section>
    );
}