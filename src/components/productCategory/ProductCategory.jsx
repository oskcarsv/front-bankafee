import { Link } from "react-router-dom";
import { ContentProductCategory } from "./ContentProductCategory";

import "../../styles/productCategory/productCategory.css";

export const ProductCategoryAll = () => {
  return (
    <section className="section-product-category">
      <div className="content-product-category">
        <ContentProductCategory />
        <ContentProductCategory />
        <ContentProductCategory />
        <ContentProductCategory />
      </div>
    </section>
  );
};
