import { Sidebar } from "../../components/homePage/Sidebar";
import { TitleProductHome } from "../../components/productHomePage/TitleProduct";
import { CategoryProduct } from "../../components/productHomePage/CategoryProduct";

import "../../pages/productHomePage/productHomePage.css";

export const ProductHomePage = () => {
  return (
    <main className="main-container-home">
      <nav className="sidebar-container">
        <Sidebar />
      </nav>
      <article className="home-page-container">
        <TitleProductHome />
        <CategoryProduct />
      </article>
    </main>
  );
};
