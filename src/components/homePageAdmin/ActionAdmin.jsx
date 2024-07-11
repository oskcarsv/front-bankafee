import { Link } from "react-router-dom";

import listUser from '../../assets/iconAdmin/listUser.svg';
import listAccount from '../../assets/iconAdmin/listAccount.svg';
import aprobAccount from '../../assets/iconAdmin/aprobAccount.svg';

import '../../styles/homePageAdmin/actionAdmin.css';

export const ActionsAdmin = () => {
    return (
        <section className="section-list-action-admin">
            <div className="content-action">
                <Link to="/listUser"><img src={listUser} alt="img" className="icon-action-admin" /></Link>
            </div>
            <div className="content-action">
                <Link to="/listAccount"><img src={listAccount} alt="" /></Link>
            </div>
            <div className="content-action">
                <Link to="/listCredit"><img src={aprobAccount} alt="" /></Link>
            </div>
        </section>
    );
};