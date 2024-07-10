import categoryFood from "../../assets/iconsProduct/categoryFood.svg";
import { Link } from "react-router-dom";

export const ContentCategoryProduct = ({name}) => {

    return (
        <Link to="/productCategory" className="link-category">
            <div className="card-category">
                <img src={categoryFood} alt="img" className="img-category" />
                <p className="title-category">{name}</p>
            </div>
        </Link>
    )
};