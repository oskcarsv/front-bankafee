import { Link } from "react-router-dom";
import { Logo } from "./landingPages/Logo.jsx";
import { BtnSignIn } from './landingPages/Btn-SignIn.jsx';

import '../styles/landingPagesCss/nav.css';

export const Nav = () => {
    return (
        <nav className="nav-landing">
            <Logo />
            <h1 className="h1-nav">BankAfee</h1>
            <ul className="nav-landing-ul">
                <li className="nav-landing-li">
                    <Link to="/aboutUs" className="nav-landing-link">About us</Link>
                </li>
                <li className="nav-landing-li">
                    <Link to="/services" className="nav-landing-link">Services</Link>
                </li>
                <BtnSignIn />
            </ul>
        </nav>
    )
};