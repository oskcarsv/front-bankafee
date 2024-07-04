import { Link } from "react-router-dom";

import computadora from "../../assets/iconsProduct/computadora.svg";

export const ContentProductCategory = () => {
    return (
        <Link to="/purchaseForm" className="link-category">
            <div className="card-product">
                <img src={computadora} alt="img" className="img-product-category" />
                <p className="text-info-product">
                    Laptop Huawei Core i5, 13", 16GB RAM, 512GB SSD
                </p>
                <p className="text-info-product">Q 16,999.00</p>
            </div>
        </Link>
    );
};