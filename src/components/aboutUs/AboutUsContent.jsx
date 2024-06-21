import '../../styles/aboutUsCss/aboutUsContent.css'
import chica1 from '../../assets/iconAbout/chica1.svg'
import chica2 from '../../assets/iconAbout/chica2.svg'

export const AboutUsContent = () => {
    return (
        <main className="content-about">
            <section className="about-us-1">
                <div className='about-us-text-left'>
                    <h1 className="about-us-title">No tenemos la fórmula mágica, pero sí somos lo más cercano a ella.</h1>
                    <p className="about-us-content-left">
                        Estamos aquí para convertirnos en el aliado que transforma la vida y que acerca de una forma más simple, humana y transparente los servicios que hasta ahora son lejanos, fríos y complicados.
                    </p>
                </div>
                <div className="about-us-img-right">
                    <img src={chica1} alt="Chica1-img" />
                </div>
            </section>
            <section className='about-us-1'>
                <div className='about-us-img-left'>
                    <img src={chica2} alt="Chica2-img" />
                </div>
                <div className='about-us-text-right'>
                    <p className='about-us-content-right'>
                        Creemos que la felicidad es un camino que se construye en equipo, maximizando así la vida de los individuos y comunidades. Brindamos herramientas que son una ruta para la prosperidad y el bienestar.
                    </p>
                </div>
            </section>
            <section className='about-us-2'>
                <div className='about-us-text-left'>
                    <h1 className="about-us-title">
                        Tu libertad es nuestra bandera
                    </h1>
                    <p className="about-us-content-left">
                        Nuestro propósito es brindar soluciones financieras y de bienestar que transformen la vida de las personas y comunidades, de una forma simple, humana y transparente.
                    </p>
                </div>
            </section>
        </main>
    );
};

