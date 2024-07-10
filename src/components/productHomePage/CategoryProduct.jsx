import { useEffect } from "react";
import { ContentCategoryProduct } from "./ContentCategoryProduct";
import { useCategoryProduct } from "../../shared/hooks/useCategoryProduct";

import "../../styles/productHomePage/categoryProduct.css";

export const CategoryProduct = () => {

  const { isLoading, getCategoryProduct, categoryProduct } = useCategoryProduct();

  useEffect(() => {
    getCategoryProduct();
  }, []);

  return (
    <section className="section-category-product">
      <div className="content-category">
        {categoryProduct.map((category) => (
          <ContentCategoryProduct key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
