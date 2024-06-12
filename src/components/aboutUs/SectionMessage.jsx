import chica1 from '../../assets/iconAbout/chica1.svg';

import '../../styles/aboutUsCss/sectionMessage.css';

export const SectionMessage = () => {
    return (
        <section className='section-message'>
            <p className='text-message'>
                Construir un futuro financiero más próspero para todos</p>
            <div className='section-decoration'>
                <div className="part-1">
                    <h1 className='tittle-1-about'>
                        No tenemos la fórmula mágica, pero sí somos lo más cercano a ella
                    </h1>
                    <p className='text-1-about'>
                        Estamos aquí para convertirnos en el aliado que transforma la vida 
                        y que acerca de una forma más simple, humana y transparente los 
                        servicios que hasta ahora son lejanos, fríos y complicados
                    </p>
                </div>
                <div className="part-2">
                    <img src={chica1} alt="img-chica1" className='img-1-about' />
                </div>
            </div>
        </section>
    );
};