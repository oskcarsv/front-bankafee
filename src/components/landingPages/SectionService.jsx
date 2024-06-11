import service from '../../assets/iconLanding/service.svg'

import '../../styles/landingPagesCss/sectionService.css'

export const SectionService = () => {
    return (
        <section className='section-tool-service'>
            <div className='section-service'>
                <p className='text-1-service'>Servicios que te hacen la vida más fácil</p>
                <img src={service} alt="img-service" className='img-service-section' />
            </div>
        </section>
    )
};