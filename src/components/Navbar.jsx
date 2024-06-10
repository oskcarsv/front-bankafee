import { Link } from "react-router-dom";
import "../styles/nav.css";

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">About us</Link>
                </li>
                <li>
                    <Link to="/about">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Sign in</Link>
                </li>
            </ul>
        </nav>
    )
};