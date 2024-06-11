import { Logo } from './landingPages/Logo';

import '../styles/landingPagesCss/footer.css';

export const Footer = () => {
    return (
        <footer  className="footer-landing">
            <Logo/>
            <h1 className="h1-footer">BankAfee</h1>
            <h2 className="h2-footer">Contact</h2>
            <a className="a-footer">email: bankafee@gmail.com</a>
            <a className="a-footer">cel: +502 4851-9632</a>
        </footer>
    )
};