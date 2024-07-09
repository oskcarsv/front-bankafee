import { Sidebar } from "../../components/homePage/Sidebar";
import { TitleProductHome } from "../../components/productHomePage/TitleProduct";
import { ProductCategoryAll } from "../../components/productCategory/ProductCategory";

import "../../pages/productCategory/productCategory.css";

export const ProductCategory = () => {
  return (
    <main className="main-container-home">
      <nav className="sidebar-container">
        <Sidebar />
      </nav>
      <article className="home-page-container">
        <TitleProductHome />
        <ProductCategoryAll />
      </article>
    </main>
  );
};
