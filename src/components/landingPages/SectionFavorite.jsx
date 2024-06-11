import favorite from '../../assets/iconLanding/favorite.svg'

import '../../styles/landingPagesCss/sectionFavorite.css'

export const SectionFavorite = () => {
    return (
        <section className='section-tool-favorite'>
            <div className='section-favorite'>
                <img src={favorite} alt="img-favorite" className='img-favorite-section' />
                <p className='text-1-favorite'>¡Utiliza la función Favoritos y disfruta de transferencias más rápidas, seguras y convenientes!</p>
            </div>
        </section>
    )
};