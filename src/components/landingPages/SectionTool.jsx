import social1 from '../../assets/iconLanding/Social1.svg'
import social2 from '../../assets/iconLanding/Social2.svg'
import social3 from '../../assets/iconLanding/Social3.svg'
import social4 from '../../assets/iconLanding/Social4.svg'

import '../../styles/landingPagesCss/sectionTool.css'

export const SectionTool = () => {
    return (
        <section className='section-tool'>
            <div className='item-tool'>
                <h1 className='title-tool'>Tranfers</h1>
                <img src={social1} alt="transfer" className='img-tool' />
            </div>
            <div className='item-tool'>
                <h1 className='title-tool'>Products</h1>
                <img src={social2} alt="products" className='img-tool' />
            </div>
            <div className='item-tool'>
                <h1 className='title-tool'>Services</h1>
                <img src={social3} alt="services" className='img-tool' />
            </div>
            <div className='item-tool'>
                <h1 className='title-tool'>Favorites</h1>
                <img src={social4} alt="favorites" className='img-tool' />
            </div>
        </section>
    )
};