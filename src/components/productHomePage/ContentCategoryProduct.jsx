import categoryFood from "../../assets/iconsProduct/categoryFood.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ContentCategoryProduct = ({name, idCategory}) => {

    const navigate = useNavigate();
    const getProductByCategory = (event) => {
        //navigate(`/productCategory/${key}`);+
        console.log("getProductByCategory");
    }

    return (
        <Link to={`/productCategory/${idCategory}`} className="link-category">
            <div onClick={getProductByCategory}  className="card-category">
                <img src={categoryFood} alt="img" className="img-category" />
                <p className="title-category">{name}</p>
            </div>
        </Link>
    )
};