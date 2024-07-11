import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCategoryProduct } from "../../shared/hooks/useCategoryProduct";
import { ContentProductCategory } from "./ContentProductCategory";

import "../../styles/productCategory/productCategory.css";

export const ProductCategoryAll = () => {

  const { isLoading, getProductForCategory, categoryProduct } = useCategoryProduct();
  const { id } = useParams();

  useEffect(() => {
    getProductForCategory(id);
  }, []);

  return (
    <section className="section-product-category">
      <div className="content-product-category">
        {Array.isArray(categoryProduct) ?
          (<div className="content-product-category">{categoryProduct.map((category) => (
            <ContentProductCategory key={category._id} category={category} description={category.description} price={category.price}/>
          ))}</div>) :
          (<div>no es</div>)}
      </div>
    </section>
  );
};
