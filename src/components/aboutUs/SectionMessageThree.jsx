import chico3 from '../../assets/iconAbout/chico3.svg';

import '../../styles/aboutUsCss/sectionMessageThree.css'

export const SectionMessageThree = () => {
    return (
        <section className='section-message-3'>
            <div className='part-1-message-3'>
                <p className='text-3'>
                    Creemos que la felicidad es un camino que se construye en equipo, maximizando así la vida de los individuos y comunidades. Brindamos herramientas que son una ruta para la prosperidad y el bienestar.
                </p>
            </div>
            <div className='part-2-message-3'>
                <img src={chico3} alt="img-chico3" className='img-3-about' />
            </div>
        </section>
    );
};