import { Link } from "react-router-dom";

export const BtnSignIn = () => {
  return (
    <Link to="/signIn">
      <button className="btn-sign-in">Sign in</button>
    </Link>
  );
};
