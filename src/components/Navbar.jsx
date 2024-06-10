import { Link } from "react-router-dom";
import "../styles/nav.css";
import { Logo } from './Logo.jsx';

export const Nav = () => {
    return (
        <nav className="nav-bar-landing-desk">
            <Logo />
            <ul>
                <li>
                    <Link to="/">About us</Link>
                </li>
                <li>
                    <Link to="/about">Services</Link>
                </li>
                <li>
                    <Link to="/signin">
                        <button>Sign in</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};