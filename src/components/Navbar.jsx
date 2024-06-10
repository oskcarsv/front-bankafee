import { Link } from "react-router-dom";
import "../styles/nav.css";

export const Nav = () => {
    return (
        <nav className="nav-">
            <ul>
                <li>
                    <Link to="/aboutUs">About us</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <button>
                        Sing in
                    </button>
                </li>
            </ul>
        </nav>
    )
};