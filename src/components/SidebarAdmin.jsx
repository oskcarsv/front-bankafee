import { Link } from 'react-router-dom';

import logo from '../assets/iconLanding/logo.svg';
import logout from '../assets/iconSidebar/logout.svg';

import '../styles/sidebarAdmin.css'

export const SidebarAdmin = () => {
    return (
        <div className='sidebar-admin'>
            <section className='section-img-logo-admin'>
                <div className='header-homepage-admin'>
                    <img src={logo} alt="img" className='img-bankafee-admin' />
                    <h1 className='title-logo-admin'>Bankafee</h1>
                </div>
            </section>
            <section className='section-actions-admin'>
                <div className='content-btn-admin'>
                    <Link className='link-content-btn'>
                        <button className='btn-action-admin'>
                            New Account
                        </button>
                    </Link>
                    <Link className='link-content-btn'>
                        <button className='btn-action-admin'>
                            Delete Account
                        </button>
                    </Link> 
                </div>
            </section>
            <div className='content-logout-admin'>
                <Link to="/">
                    <button className='btn-logout-for-admin'>
                        <img src={logout} alt="img" />
                    </button>
                </Link>
            </div>
        </div>
    );
};