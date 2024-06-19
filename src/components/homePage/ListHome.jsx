import transferIcon from "../../assets/iconListHome/transferIcon.svg";
import productIcon from "../../assets/iconListHome/productIcon.svg";
import servicesIcon from "../../assets/iconListHome/servicesIcon.svg";
import favoritesIcon from "../../assets/iconListHome/favoritesIcon.svg";

import '../../styles/homePageCss/listHome.css';

export const ListHome = () => {
    return (
        <div className="list-home">
            <div className="icon-list-utilities-home">
                <img src={transferIcon} alt="icon" className="icon-list-home" />
            </div>
            <div className="icon-list-utilities-home">
                <img src={productIcon} alt="icon" className="icon-list-home" />
            </div>
            <div className="icon-list-utilities-home">
                <img src={servicesIcon} alt="icon" className="icon-list-home" />
            </div>
            <div className="icon-list-utilities-home">
                <img src={favoritesIcon} alt="icon" className="icon-list-home" />
            </div>
        </div>
    );
};