import myAccount from '../../assets/iconHomePage/myAccount.svg';
import editMyAccount from '../../assets/iconHomePage/editMyAccount.svg';

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
                    <img src={editMyAccount} alt="icon" className='icon-myAccount'/>
                </div>
                <h1 className='card-account-info-amount'>GTQ 500.00</h1>
            </div>
            <div className="card-account-info">
                <div className='content-title'>
                    <p className='card-account-info-title'>Cuenta monetaria - Mi cuenta</p>
                    <img src={myAccount} alt="icon" className='icon-myAccount' />
                </div>
                <div className='content-title'>
                    <p className='card-account-info-number'>1234567890</p>
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