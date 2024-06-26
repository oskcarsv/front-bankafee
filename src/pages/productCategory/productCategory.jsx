import { Sidebar } from "../../components/homePage/Sidebar";
import { TitleProductHome } from "../../components/productHomePage/TitleProduct";
import { ProductCategoryAll } from "../../components/productCategory/ProductCategory";

import '../../pages/productCategory/productCategory.css';

export const ProductCategory = () => {
    return (
        <>
            <div className="content-sidebar">
                <Sidebar />
            </div>
            <div className="content-category-products">
                <TitleProductHome />
                <ProductCategoryAll />
            </div>
        </>
    );
};