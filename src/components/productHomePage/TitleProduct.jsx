import { Link } from 'react-router-dom';

import homeMessage from '../../assets/iconSidebar/homeMessage.svg';
import goBack from '../../assets/iconSidebar/goBack.svg';

import '../../styles/productHomePage/titleProduct.css';

export const TitleProductHome = () => {
    const currentPath = window.location.pathname;

    return (
        <div className="section-product-title">
            <div className='content-titles'>
                <div>{currentPath === "/productHomePage" ? (
                    <h1 className="title-product-home">Product </h1>
                ) : (
                    <h1 className="title-product-home">Category Home Page</h1>
                )}
                </div>
                <div className='content-btn'>
                    <button className='btn-back'>
                        <Link to="/home" className='link-back'>
                            {currentPath === "/productHomePage" ? (
                                <img src={homeMessage} alt="" />
                            ) : (
                                <Link to="/productHomePage" className='link-back'><img src={goBack} alt="" /></Link>
                            )}
                        </Link>
                    </button>
                </div>
            </div>
            <hr className='s' />
        </div>
    );
}