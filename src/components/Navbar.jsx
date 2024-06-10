import { Link } from "react-router-dom";
import "../styles/nav.css";
import { Logo } from './Logo.jsx';

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/aboutUs">About us</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Sign in</Link>
                </li>
            </ul>
        </nav>
    )
};