import logo from '../assets/iconLanding/logo.svg'

import '../styles/slide.css'

export const Slide = () => {
    return (
        <div className='content-slide'>
            {/* <div className='content-logo-slide'> */}
                <img src={logo} alt="img" className='img-logo-slide' />
                <div className='info-title'>
                    <h1 className='title-slide'>BankAfee</h1>
                    <h1 className='title-slogan'>Tu banco de confianza</h1>
                </div>
            {/* </div> */}
            {/* <div className='content-info-slide'>
                <div className='info-title'>
                    <h1 className='title-slide'>BankAfee</h1>
                </div>
                <div className='info-title-2'>
                    <h3 className='title-slogan'>Tu banco de confianza</h3>
                </div>
            </div> */}
        </div>
    );
};