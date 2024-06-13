import promo2 from '../../assets/iconService/promo2.svg';


import chica1 from '../../assets/iconAbout/chica1.svg';

import '../../styles/aboutUsCss/sectionMessage.css';

export const SectionMessage = () => {
    const currentPath = window.location.pathname;


    return (
        <section className='section-message'>
            <p className='text-message'>
                {currentPath === "/service" ? "¡Echa un vistazo a nuestros servicios para que puedas aprovecharlos al máximo!" : "Construir un futuro financiero más próspero para todos"}</p>
            <div className='section-decoration'>
                <div className="part-1">
                    <h1 className='tittle-1-about'>
                        {currentPath === "/service" ? <img src={promo2} alt="img" className='img-service' /> : "No tenemos la fórmula mágica, pero sí somos lo más cercano a ella"}
                    </h1>
                    <p className='text-1-about'>
                        {currentPath === "/service" ? "" : "Estamos aquí para convertirnos en el aliado que transforma la vida y que acerca de una forma más simple, humana y transparente los servicios que hasta ahora son lejanos, fríos y complicados"}
                    </p>
                </div>
                <div className="part-2">
                    {currentPath === "/service" ? <h1 className='tittle-1-about'><img src={promo2} alt="img" className='img-service' /></h1> : <img src={chica1} alt="img" className='img-1-about' />}
                </div>
            </div>
        </section>
    );
};