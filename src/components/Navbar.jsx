import { Link } from "react-router-dom";
import "../styles/nav.css";
import { Logo } from './Logo.jsx';
import { BtnSignIn } from './Btn-SignIn.jsx';
export const Nav = () => {
    return (
        <nav className="nav-landing">
            <Logo />
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