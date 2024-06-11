import group from '../../assets/iconLanding/Group.svg'

import '../../styles/landingPagesCss/sectionWelcome.css'

export const SectionWelcome = () => {
    return (
        <section className="section-content">
            <div className="content">
                <p className="text-1">Disfruta de una amplia gama de productos y servicios financieros</p>
                <img src={group} alt="image" className='img-1' />
            </div>
            
            <div className="content-2">
                <p className="text-2">En BankAfee creemos que todos merecen tener acceso a servicios
                    financieros de calidad que les ayuden a alcanzar sus metas.
                    Por eso, ofrecemos una amplia gama de productos y servicios diseñados para
                    satisfacer las necesidades de nuestros clientes, desde individuos hasta empresas.
                </p>
            </div>
        </section>
    )
};