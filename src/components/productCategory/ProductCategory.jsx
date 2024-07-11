import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCategoryProduct } from "../../shared/hooks/useCategoryProduct";
import { ContentProductCategory } from "./ContentProductCategory";

import "../../styles/productCategory/productCategory.css";

export const ProductCategoryAll = () => {
  const { isLoading, getProductForCategory, categoryProduct } =
    useCategoryProduct();
  const { id } = useParams();

  useEffect(() => {
    getProductForCategory(id);
  }, [id]);

  return (
    <section className="section-product-category">
      <div className="content-product-category">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {Array.isArray(categoryProduct) && categoryProduct.length === 0 ? (
              <div>No hay productos con esta categoría</div>
            ) : null}
            {Array.isArray(categoryProduct) ? (
              <div className="content-product-category">
                {categoryProduct.map((category) => (
                  <ContentProductCategory
                    key={category._id}
                    category={category}
                    description={category.description}
                    price={category.price}
                    img={category.img}
                  />
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
};
