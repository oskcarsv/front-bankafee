import { Link } from "react-router-dom";
import "../styles/nav.css";

export const Nav = () => {
    return (
        <nav className="nav">
            <div className="icon-text">
                <div className="text">
                    <h1 className="tittle-h1">BankAfee</h1>
                </div>
            </div>
            <div className="buttons">
                <button type="button" className="button">
                    <Link to="/aboutUs">About us?</Link>
                </button>
            </div>
            <div className="buttons">
                <button type="button" className="button">
                    <Link to="/services">Services</Link>
                </button>
            </div>
            <div className="buttons">
                <button type="button" className="button">
                    <Link to="/singIn">Sing in</Link>
                </button>
            </div>
        </nav>
    )
};