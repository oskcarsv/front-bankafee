import myAccount from '../../assets/iconHomePage/myAccount.svg';
import editMyAccount from '../../assets/iconHomePage/editMyAccount.svg';
import LeftRow from '../../assets/iconHomePage/LeftRow.svg';
import RightRow from '../../assets/iconHomePage/RightRow.svg';

import '../../styles/homePageCss/cardAccount.css';

export const ListCardAccount = () => {
    return (
        <div className="card-account">
            <div className="card-account-info">
                <div className='content-title'>
                    <p className='card-account-info-title'>Cuenta ahorro - Mi cuenta</p>
                    <img src={myAccount} alt="icon" className='icon-myAccount' />
                </div>
                <div className='content-title'>
                    <p className='card-account-info-number'>1234567890 </p>
                    <img src={editMyAccount} alt="icon" className='icon-myAccount' />
                </div>
                <h1 className='card-account-info-amount'>GTQ 400.00</h1>
            </div>
            <div className="card-account-info">
                <div className='content-title'>
                    <p className='card-account-info-title'>Cuenta ahorro - Mi cuenta</p>
                    <img src={myAccount} alt="icon" className='icon-myAccount' />
                </div>
                <div className='content-title'>
                    <p className='card-account-info-number'>1234567890 </p>
                    <img src={editMyAccount} alt="icon" className='icon-myAccount' />
                </div>
                <h1 className='card-account-info-amount'>GTQ 500.00</h1>

            </div>
            <div className="card-account-info">
                <div className='content-title'>
                    <p className='card-account-info-title'>Cuenta ahorro - Mi cuenta</p>
                    <img src={myAccount} alt="icon" className='icon-myAccount' />
                </div>
                <div className='content-title'>
                    <p className='card-account-info-number'>1234567890 </p>
                    <img src={editMyAccount} alt="icon" className='icon-myAccount' />
                </div>
                <h1 className='card-account-info-amount'>GTQ 500.00</h1>

            </div>
            <div className="card-account-info">
                <div className='content-title'>
                    <p className='card-account-info-title'>Cuenta ahorro - Mi cuenta</p>
                    <img src={myAccount} alt="icon" className='icon-myAccount' />
                </div>
                <div className='content-title'>
                    <p className='card-account-info-number'>1234567890 </p>
                    <img src={editMyAccount} alt="icon" className='icon-myAccount' />
                </div>
                <h1 className='card-account-info-amount'>GTQ 500.00</h1>

            </div>
            <div className="card-account-info">
                <div className='content-title'>
                    <p className='card-account-info-title'>Cuenta ahorro - Mi cuenta</p>
                    <img src={myAccount} alt="icon" className='icon-myAccount' />
                </div>
                <div className='content-title'>
                    <p className='card-account-info-number'>1234567890 </p>
                    <img src={editMyAccount} alt="icon" className='icon-myAccount' />
                </div>
                <h1 className='card-account-info-amount'>GTQ 500.00</h1>

            </div>
        </div>
    );
};

// // import React from 'react';
// // import Slider from 'react-slick';
// // import myAccount from '../../assets/iconHomePage/myAccount.svg';
// // import editMyAccount from '../../assets/iconHomePage/editMyAccount.svg';

// // import '../../styles/homePageCss/cardAccount.css';

// // export const ListCardAccount = () => {
// //     const settings = {
// //         dots: true,
// //         infin</div>ite: false,
// //         speed: 500,
// //    </div>     slidesToShow: 1,
// //         slidesToScroll: 1,
// //         responsive: [
// //             {
// //                 breakpoint: 768, // Mobile breakpoint
// //                 settings: {
// //                     slidesToShow: 1,
// //                     slidesToScroll: 1,
// //                     infinite: true,
// // </div>                    dots: true
// //                 }
// //             }
// //         ]
// //     };

// //     return (
// //         <div className="card-account-container">
// //             <div className="card-account-desktop">
// //                 <div className="card-account-info">
// //                     <div className='content-title'>
// //                         <p className='card-account-info-title'>Cuenta ahorro - Mi cuenta</p>
// //                         <img src={myAccount} alt="icon" className='icon-myAccount' />
// //                     </div>
// //                     <div className='content-title'>
// //                         <p className='card-account-info-number'>1234567890 </p>
// //                         <img src={editMyAccount} alt="icon" className='icon-myAccount' />
// //                     </div>
// //                     <h1 className='card-account-info-amount'>GTQ 500.00</h1>
// //                 </div>
// //                 <div className="card-account-info">
// //                     <div className='content-title'>
// //                         <p className='card-account-info-title'>Cuenta monetaria - Mi cuenta</p>
// //                         <img src={myAccount} alt="icon" className='icon-myAccount' />
// //                     </div>
// //                     <div className='content-title'>
// //                         <p className='card-account-info-number'>1234567890</p>
// //                         <img src={editMyAccount} alt="icon" className='icon-myAccount' />
// //                     </div>
// //                     <h1 className='card-account-info-amount'>GTQ 500.00</h1>
// //                 </div>
// //                 <div className="card-account-info">
// //                     <div className='content-title'>
// //                         <p className='card-account-info-title'>Cuenta ahorro - Mi cuenta</p>
// //                         <img src={myAccount} alt="icon" className='icon-myAccount' />
// //                     </div>
// //                     <div className='content-title'>
// //                         <p className='card-account-info-number'>1234567890 </p>
// //                         <img src={editMyAccount} alt="icon" className='icon-myAccount' />
// //                     </div>
// //                     <h1 className='card-account-info-amount'>GTQ 500.00</h1>
// //                 </div>
// //             </div>
// //             <div className="card-account-mobile">
// //                 <Slider {...settings}>
// //                     <div className="card-account-info">
// //                         <div className='content-title'>
// //                             <p className='card-account-info-title'>Cuenta ahorro - Mi cuenta</p>
// //                             <img src={myAccount} alt="icon" className='icon-myAccount' />
// //                         </div>
// //                         <div className='content-title'>
// //                             <p className='card-account-info-number'>1234567890 </p>
// //                             <img src={editMyAccount} alt="icon" className='icon-myAccount' />
// //                         </div>
// //                         <h1 className='card-account-info-amount'>GTQ 500.00</h1>
// //                     </div>
// //                     <div className="card-account-info">
// //                         <div className='content-title'>
// //                             <p className='card-account-info-title'>Cuenta monetaria - Mi cuenta</p>
// //                             <img src={myAccount} alt="icon" className='icon-myAccount' />
// //                         </div>
// //                         <div className='content-title'>
// //                             <p className='card-account-info-number'>1234567890</p>
// //                             <img src={editMyAccount} alt="icon" className='icon-myAccount' />
// //                         </div>
// //                         <h1 className='card-account-info-amount'>GTQ 500.00</h1>
// //                     </div>
// //                     <div className="card-account-info">
// //                         <div className='content-title'>
// //                             <p className='card-account-info-title'>Cuenta ahorro - Mi cuenta</p>
// //                             <img src={myAccount} alt="icon" className='icon-myAccount' />
// //                         </div>
// //                         <div className='content-title'>
// //                             <p className='card-account-info-number'>1234567890 </p>
// //                             <img src={editMyAccount} alt="icon" className='icon-myAccount' />
// //                         </div>
// //                         <h1 className='card-account-info-amount'>GTQ 500.00</h1>
// //                     </div>
// //                 </Slider>
// //             </div>
// //         </div>
// //     );
// // };
