import { useState, useEffect } from 'react';
import { getProduct } from '../../services/api';

export const useProduct = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await getProduct();
            !response.error ? setCategories(response.data.categories) : console.log(response.e);
        };
        fetchCategories();
    }, []);

    return categories;
};

