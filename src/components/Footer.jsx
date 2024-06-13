import logo from "../assets/iconLanding/logo.svg";
import { Logo } from "../components/landingPages/Logo";
import "../styles/landingPagesCss/footer.css";

export const Footer = () => {
  return (
    <footer className="footer-landing">
      <div className="section-footer-1">
        <Logo />
        <h1 className="title-footer">BankAfee</h1>
      </div>
      <div className="section-footer-2">
        <h2 className="title-footer-2">Contact</h2>
        <a className="text-footer">Email: bankafee@gmail.com</a>
        <a className="text-footer">Cel: +502 4851-9632</a>
      </div>
    </footer>
  );
};
