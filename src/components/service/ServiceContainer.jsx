import '../../styles/serviceCss/serviceContent.css';
import promo2 from '../../assets/iconService/promo2.svg';

export const ServiceContainer = () => {
    return (
        <div className="service-container">
            <img src={promo2} className="img-service" />
            <p className='service-description'>
                Servicio 1 test
            </p>
        </div>
    );
};