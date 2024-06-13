import product from '../../assets/iconLanding/product.svg'

import '../../styles/landingPagesCss/sectionProduct.css'

export const SectionProduct = () => {
    return (
        <section className='section-tool-product' id='productsTool'>
            <div className='section-product'>
                <img src={product} alt="img-product" className='img-product-section' />
                <p className='text-1-product'>
                Fáciles de entender, seguros de usar y tuyos a tu medida.
                </p>
            </div>
            
        </section>
    )
};