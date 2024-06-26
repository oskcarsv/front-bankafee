import { Link } from "react-router-dom";

import transferIcon from "../../assets/iconListHome/transferIcon.svg";
import productIcon from "../../assets/iconListHome/productIcon.svg";
import servicesIcon from "../../assets/iconListHome/servicesIcon.svg";
import favoritesIcon from "../../assets/iconListHome/favoritesIcon.svg";

import '../../styles/homePageCss/listHome.css';

export const ActionsHome = () => {
    return (
        <div className="list-home">
            <div className="icon-list-utilities-home">
                <Link to="/transferUser"><img src={transferIcon} alt="icon" className="icon-list-home" /></Link>
            </div>
            <div className="icon-list-utilities-home">
                <Link to="/productHomePage"><img src={productIcon} alt="icon" className="icon-list-home" /></Link>
            </div>
            <div className="icon-list-utilities-home">
                <Link to="/"><img src={servicesIcon} alt="icon" className="icon-list-home" /></Link>
            </div>
            <div className="icon-list-utilities-home">
                <Link to="/"><img src={favoritesIcon} alt="icon" className="icon-list-home" /></Link>
            </div>
        </div>
    );
};