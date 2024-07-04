import { Link } from 'react-router-dom';

import historyAll from '../../assets/iconHistoryList/historyAll.svg';

import '../../styles/historyUser/listHistoryUser.css';

export const ListHistoryUser = () => {
    return (
        <div className='content--history'>
            <div className='card-history-all'>
                <Link to="/historyTransfer" className='link-history-transfer'>
                    <img src={historyAll} alt="icon" className='icon-history-' />
                    <p className='title--card-history'>Pending transfer history</p>
                </Link>
            </div>
            <div className='card-history-all'>
                <Link to="/historyDeposit" className='link-history-transfer'>
                    <img src={historyAll} alt="icon" className='icon-history-' />
                    <p className='title--card-history'>Pending deposit history</p>
                </Link>
            </div>
            <div className='card-history-all'>
                <Link to="/historyCredit" className='link-history-transfer'>
                    <img src={historyAll} alt="icon" className='icon-history-' />
                    <p className='title--card-history'>Pending credit history</p>
                </Link>
            </div>
        </div>
    );
};