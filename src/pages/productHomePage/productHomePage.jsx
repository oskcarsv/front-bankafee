import { Sidebar } from "../../components/homePage/Sidebar";
import { TitleProductHome } from "../../components/productHomePage/TitleProduct";

import '../../pages/productHomePage/productHomePage.css';

export const ProductHomePage = () => {
    return (
        <>
            <div className="sidebar-product">
                <Sidebar />
            </div>
            <div className="content-product">
                <TitleProductHome />
            </div>
        </>
    );
};