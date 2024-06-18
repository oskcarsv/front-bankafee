import { Link } from 'react-router-dom';
import signIn from '../../assets/iconLogin/SignIn.svg';
import logo from "../../assets/iconLanding/logo.svg";

import '../../styles/loginCss/form.css'


export const Form = () => {

    return (
        <main className="main-content">
            <div className="content-login">
                <div className="content-login-logo">
                    <img src={logo} alt="logo-login" className='img-login' />
                    <div className="content-info">
                        <h1 className="h1-login">BankAfee</h1>
                        <h2 className="h2-login">Tu banco de confianza</h2>
                    </div>
                </div>
            </div>
            <div className="content-form">
                <form className="form-login">
                    <img src={signIn} alt="img" className='img-sign' />
                    <h1 className="h1-sign">Sing In</h1>
                    <input type="email" name="email" id="email" className="input-login" placeholder="email" />
                    <input type="password" name="password" id="password" className="input-login" placeholder='password' />
                    <Link to="/home">
                        <button type="submit" className="btn-login">Sign In</button>
                    </Link>
                </form>
            </div>
        </main>
    );
};