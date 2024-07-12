import { Link } from "react-router-dom";

import "../../styles/productCategory/contentProductCategory.css";

export const ContentProductCategory = ({ description, price, img }) => {
  return (
    <Link to="/purchaseForm" className="link-category">
      <div className="card-product">
        <div className="content-img-product">
          <img src={img} alt="img" className="img-product-buy" />
        </div>
        <p className="text-info-product">{description}</p>
        <p className="text-info-product">{price}</p>
      </div>
    </Link>
  );
};
