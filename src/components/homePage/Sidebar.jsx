import { Link } from 'react-router-dom';

import logo from '../../assets/iconLanding/logo.svg';
import perfil from '../../assets/iconSidebar/perfil.svg';
import editUser from '../../assets/iconSidebar/editUser.svg';
import createAccount from '../../assets/iconSidebar/createAccount.svg';
import history from '../../assets/iconSidebar/history.svg';
import logout from '../../assets/iconSidebar/logout.svg';
import home from '../../assets/iconSidebar/home.svg';

import '../../styles/homePageCss/sidebar.css'

export const Sidebar = () => {

    const currentPath = window.location.pathname;

    return (
        <div className="sidebar">
            <div className='content-img-logo'>
                <img src={logo} alt="img" className='img-sidebar-bankafee' />
                <div className='text-bankafee'>
                    <h1 className='text-logo'>Bankafee</h1>
                </div>
            </div>
            <section className='profile-container-all'>
                <div className='content-info-profile'>
                    <img src={perfil} alt="img" className='img-perfil-sidebar' />
                    <div className='name-container'>
                        <h1 className='name-profile'>Angel Mendez</h1>
                        <Link to="/editUser"><img src={editUser} alt="icon" className='icon-edit-user' /></Link>
                    </div>
                    <h2 className='email-profile'>amendez@gmail.com</h2>
                </div>
                <div className="content-sidebar-menu-btn">
                    <Link to="/cAccountByUser" className='btn-home-sidebar'>
                        <button className="sidebar-menu-button">Create <img src={createAccount} alt="icon" className='icon-create-account' /></button>
                    </Link>
                    <Link to="/history" className='btn-home-sidebar'>
                        {currentPath === "/history" ?
                            (<Link to="/home" className='btn-home-sidebar'>
                                <button className="sidebar-menu-button">
                                    Home
                                    <img src={home} alt="icon" className='icon-history' />
                                </button>
                            </Link>) :
                            <button className="sidebar-menu-button">
                                History
                                <img src={history} alt="icon" className='icon-history' />
                            </button>}
                    </Link>
                </div>
            </section>
            <div className='content-logout-sidebar-btn'>
                <Link to="/">
                    <button className="sidebar-menu-button-logout"><img src={logout} alt="img" className='img-sidebar-logout' /></button>
                </Link>
            </div>

        </div>
    );
};