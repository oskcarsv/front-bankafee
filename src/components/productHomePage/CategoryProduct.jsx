import { Link } from "react-router-dom";
import { ContentCategoryProduct } from "./ContentCategoryProduct";

import categoryElectrodomestic from "../../assets/iconsProduct/categoryElectrodomestic.svg";
import categoryFood from "../../assets/iconsProduct/categoryFood.svg";
import categoryCars from "../../assets/iconsProduct/categoryCars.svg";

import "../../styles/productHomePage/categoryProduct.css";

export const CategoryProduct = () => {
  return (
    <section className="section-category-product">
      <div className="content-category">
        <ContentCategoryProduct />
        <ContentCategoryProduct />
        <ContentCategoryProduct />
        <ContentCategoryProduct />
        <ContentCategoryProduct />
        <ContentCategoryProduct />
        <ContentCategoryProduct />
      </div>
    </section>
  );
};
