import logo from '../assets/iconLanding/logo.svg'

import '../styles/landingPagesCss/footer.css';

export const Footer = () => {
    return (
        <footer className="footer-landing">
            <section className='section-footer-1'>
                <div className='content-logo'>
                    <img src={logo} alt="logo" className='img-logo-footer'/>
                    <h1 className='title-footer'>BankAfee</h1>
                </div>
                <div className='content-info'>
                    <h2 className='title-footer-2'>Contact</h2>
                    <a className='text-footer'>Email: bankafee@gmail.com</a>
                    <a className='text-footer'>Cel: +502 4851-9632</a>
                </div>
            </section>
            <section className='content-cr'>
                <p>
                    &copy; 2021 BankAfee. All rights reserved.
                </p>
            </section>
        </footer>
    )
};
