import categoryFood from "../../assets/iconsProduct/categoryFood.svg";
import { Link } from "react-router-dom";
import { useProduct } from "../../shared/hooks/useProduct"; 

export const ContentCategoryProduct = () => {
    const { categories } = useProduct(); 

    return (
        <>
            {categories.map((category) => (
                <Link to={`/productCategory/${category.id}`} className="link-category" key={category.id}>
                    <div className="card-category">
                        <img src={categoryFood} alt="img" className="img-category" />
                        <p className="title-category">{category.name}</p>
                    </div>
                </Link>
            ))}
        </>
    );
};