import { Link } from 'react-router-dom';

import logo from '../../assets/iconLanding/logo.svg';
import perfil from '../../assets/iconSidebar/perfil.svg';
import editUser from '../../assets/iconSidebar/editUser.svg';
import createAccount from '../../assets/iconSidebar/createAccount.svg';
import history from '../../assets/iconSidebar/history.svg';
import logout from '../../assets/iconSidebar/logout.svg';

import '../../styles/homePageCss/sidebar.css'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={logo} alt="img" className='img-sidebar' />
            <img src={perfil} alt="img" className='img-perfil-sidebar' />
            <h1 className='name-profile'>Angel Mendez <Link to="/editUser"><img src={editUser} alt="icon" className='icon-edit-user' /></Link></h1>
            <h2 className='email-profile'>amendez@gmail.com</h2>
            <ul className="sidebar-menu">
                <li className="sidebar-menu-item">
                    <Link to="/cAccountByUser" className='btn-home-sidebar'>
                        <button className="sidebar-menu-button">Create <img src={createAccount} alt="icon" className='icon-create-account' /></button>
                    </Link>
                </li>
                <li className="sidebar-menu-item">
                    <Link className='btn-home-sidebar'>
                        <button className="sidebar-menu-button">History <img src={history} alt="icon" className='icon-history' /></button>
                    </Link>
                </li>
                <li className="sidebar-menu-item-">
                    <Link to="/">
                    <button className="sidebar-menu-button-logout"><img src={logout} alt="img" className='img-sidebar-logout' /></button>
                    </Link>
                </li>
            </ul>
        </div>
    );
};