import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cancelIcon from "../assets/iconLanding/Cancel-Icon.svg";
import addIcon from '../assets/iconHomePage/addIcon.svg';
import historyIcon from '../assets/iconHomePage/historyIcon.svg';
import perfil from '../assets/iconSidebar/perfil.svg';
import editUser from '../assets/iconSidebar/editUser.svg';
import '../styles/homePageCss/menu-mobile-user.css';
export const MenuMobileUser = ({ onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        document.body.classList.add("no-scroll");
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    const handleCancelClick = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 500);
    };

    const currentPath = window.location.pathname;

    return (
        <div className={`menu-mobile ${isClosing ? 'slide-out' : ''}`}>
            <img
                src={cancelIcon}
                alt="Cancel Icon"
                className="cancel-icon"
                onClick={handleCancelClick}
            />
            <ul className="menu-mobile-ul">
                <li className="home-menu-mobile-li">
                    <section className="profile-container">
                        <img src={perfil} alt="perfil" className="home-menu-mobile-profile" />
                        <h1 className="home-name-profile">Angel Mendez</h1>
                        <div className="home-email-container">
                            <h1 className="home-email-profile">amendez@gmail.com</h1>
                            <Link to='/editUser' className="link-eddit-icon">
                                <img src={editUser} alt="editUser" className="eddit-icon" />
                            </Link>
                        </div>
                    </section>
                </li>
                <li>
                    <Link to="/cAccountByUser" className="menu-mobile-li">
                        <img src={addIcon} alt="Add Icon" className="add-icon" />
                        <p className="menu-mobile-p createAccount">Create Account</p>
                    </Link>
                </li>
                <li>
                    <Link to="/history" className="menu-mobile-li">
                        <img src={historyIcon} alt="History Icon" className="history-icon" />
                        <p className="menu-mobile-p history">History</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};