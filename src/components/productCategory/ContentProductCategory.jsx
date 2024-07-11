import { Link } from "react-router-dom";

import computadora from "../../assets/iconsProduct/computadora.svg";

export const ContentProductCategory = ({ description, price }) => {
  return (
    <Link to="/purchaseForm" className="link-category">
      <div className="card-product">
        <img src={computadora} alt="img" className="img-product-category" />
        <p className="text-info-product">{description}</p>
        <p className="text-info-product">{price}</p>
      </div>
    </Link>
  );
};
