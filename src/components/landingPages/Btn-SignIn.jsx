import { Link } from "react-router-dom";

export const BtnSignIn = () => {
    return (
        <Link to="/login">
            <button className="btn-sign-in">Sign In</button>
        </Link>
    )
};