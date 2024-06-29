import { Link } from 'react-router-dom';

import homeMessage from '../../assets/iconSidebar/homeMessage.svg';

import '../../styles/favorites/messageFavorite.css'

export const MessageFavorite = () => {
    return (
        <section className="message-favorite">
            <div className="titles-container-favorites">
                <div>
                    <h1 className='message-title-favorite'>Favorite Users</h1>
                </div>
                <div className="container-btn-back-favorites">
                    <Link to="/home">
                        <button className="btn-goBack">
                            <img src={homeMessage} alt="img" className="img-goBack" />
                        </button>
                    </Link>
                </div>
            </div>
            <hr className='s' />
        </section>
    )
}