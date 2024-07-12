import "../../styles/productCategory/contentProductCategory.css";

import { Link, useNavigate } from "react-router-dom";

export const ContentCategoryProduct = ({ name, idCategory, img }) => {
  const navigate = useNavigate();
  const getProductByCategory = (event) => {
    // navigate(`/productCategory/${key}`);+
    console.log("getProductByCategory");
  };

  return (
    <Link to={`/productCategory/${idCategory}`} className="link-category">
      <div onClick={getProductByCategory} className="card-category">
        <div className="content-img-product">
          <img src={img} alt="img" className="img-product-buy" />
        </div>
        <p className="title-category">{name}</p>
      </div>
    </Link>
  );
};
