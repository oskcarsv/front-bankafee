import { useState, useEffect } from "react";
import { getProduct } from "../../services";

export const useProductCategory = () => {
    const [productCategory, setProductCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProductCategory = async () => {
            setLoading(true);
            const response = await getProduct();
            if (response.error) {
                setError(true);
            } else {
                setProductCategory(response.data);
            }
            setLoading(false);
        };
        fetchProductCategory();
    }, []);

    return { productCategory, loading, error };

}