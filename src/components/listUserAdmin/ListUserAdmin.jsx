import { Link } from "react-router-dom";

import homeMessage from "../../assets/iconSidebar/homeMessage.svg";

import "../../styles/listUserAdmin/listUserAdmin.css";

export const ListUserAdmin = () => {
    return (
        <section className="section-message-users">
            <div className="container-titles-users">
                <div>
                    <h1 className="title-message-users">Users</h1>
                </div>
                <div className="container-btn-back-users">
                    <Link to="/homeAdmin">
                        <button className="btn-goBack-admin">
                            <img src={homeMessage} alt="img" className="img-goBack-admin"/>
                        </button>
                    </Link>
                </div>
            </div>
            <hr className="s"/>
        </section>
    );
};