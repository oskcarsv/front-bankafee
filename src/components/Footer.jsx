import { Logo } from "../components/landingPages/Logo";
import "../styles/landingPagesCss/footer.css";

export const Footer = () => {
  return (
    <footer className="footer-landing">
      <section className="section-footer-1">
        <Logo />
        <h1 className="title-footer">BankAfee</h1>
      </section>
      <section className="section-footer-2">
        <h2 className="title-footer-2">Contact</h2>
        <div className="content-info">
          <a className="text-footer">Email: bankafee@gmail.com</a>
          <a className="text-footer">Cel: +502 4851-9632</a>
        </div>
      </section>
    </footer>
  );
};
