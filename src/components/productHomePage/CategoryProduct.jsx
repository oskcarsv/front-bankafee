import { Link } from 'react-router-dom';

import categoryElectrodomestic from '../../assets/iconsProduct/categoryElectrodomestic.svg';
import categoryFood from '../../assets/iconsProduct/categoryFood.svg';
import categoryCars from '../../assets/iconsProduct/categoryCars.svg';

import '../../styles/productHomePage/categoryProduct.css';

export const CategoryProduct = () => {
    return (
        <section className='section-category-product'>
            <div className='content-category'>
                <Link to="/productCategory" className='link-category'>
                    <div className='card-category'>
                        <img src={categoryElectrodomestic} alt="img" className='img-category' />
                        <p className='title-category'>Category Electrodomestic</p>
                    </div>
                </Link>
                <Link to="/productCategory" className='link-category'>
                    <div className='card-category'>
                        <img src={categoryFood} alt="img" className='img-category' />
                        <p className='title-category'>Category Food</p>
                    </div>
                </Link>
                <Link to="/productCategory" className='link-category'>
                    <div className='card-category'>
                        <img src={categoryCars} alt="img" className='img-category' />
                        <p className='title-category'> Category Cars</p>
                    </div>
                </Link>
                <Link to="/productCategory" className='link-category'>
                    <div className='card-category'>
                        <img src={categoryCars} alt="img" className='img-category' />
                        <p className='title-category'> Category Cars</p>
                    </div>
                </Link>
            </div>
        </section>
    );
}