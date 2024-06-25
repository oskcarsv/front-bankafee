import { Link } from 'react-router-dom';

import categoryElectrodomestic from '../../assets/iconsProduct/categoryElectrodomestic.svg';
import categoryFood from '../../assets/iconsProduct/categoryFood.svg';
import categoryCars from '../../assets/iconsProduct/categoryCars.svg';

import '../../styles/productHomePage/categoryProduct.css';

export const CategoryProduct = () => {
    return (
        <section className='section-category-product'>
            <div className='content-category'>
                <div className='card-category'>
                    <p className='title-category'>Category Electrodomestic</p>
                    <Link><img src={categoryElectrodomestic} alt="img" className='img-category' /></Link>
                </div>
                <div className='card-category'>
                    <p className='title-category'>Category Food</p>
                    <Link><img src={categoryFood} alt="img" className='img-category' /></Link>
                </div>
                <div className='card-category'>
                    <p className='title-category'> Category Cars</p>
                    <Link><img src={categoryCars} alt="img" className='img-category' /></Link>
                </div>
            </div>
        </section>
    );
}