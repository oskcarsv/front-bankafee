import '../../styles/serviceCss/serviceContent.css';
import { ServiceContainer } from './ServiceContainer.jsx';
export const ServiceContent = () => {
    return (
        <main className="main-service-container">
            <section className='title-container'>
                <h1 className='title-service'>
                    ¡Promociones del mes!
                </h1>
            </section>
            <section className="services-container">
                <ServiceContainer />
                <ServiceContainer />
                <ServiceContainer />
                <ServiceContainer />
                <ServiceContainer />
            </section>
        </main>
    );
};