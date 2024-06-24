import React, { useEffect, useState } from "react";
import cancelIcon from "../assets/iconLanding/Cancel-Icon.svg";
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

    return (
        <div className={`menu-mobile-user ${isClosing ? 'slide-out' : ''}`}>
            <img
                src={cancelIcon}
                alt="Cancel Icon"
                className="cancel-icon"
                onClick={handleCancelClick}
            />
            {/* <ul className="menu-mobile-ul">
                <li>
                    <Link to="/profile" className="menu-mobile-li">
                        <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
                        <p className="menu-mobile-p">Profile</p>
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="menu-mobile-li">
                        <img src={settingsIcon} alt="Settings Icon" className="settings-icon" />
                        <p className="menu-mobile-p">Settings</p>
                    </Link>
                </li>
                <li>
                    <Link to="/signOut" className="menu-mobile-li">
                        <img src={signOutIcon} alt="Sign Out Icon" className="sign-out-icon" />
                        <p className="menu-mobile-p">Sign Out</p>
                    </Link>
                </li>
            </ul> */}
        </div>
    );
};