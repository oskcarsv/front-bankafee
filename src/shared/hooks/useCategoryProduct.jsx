import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getCategoryProduct as categoryProductRequest } from '../../services/api';

export const useCategoryProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [category, setCategory] = useState();
    const navigate = useNavigate();

    const getCategoryProduct = async () => {
        setIsLoading(true);
        const response = await categoryProductRequest();
        if (response.error && response.e) {
            setIsLoading(false);
            return toast.error(
                'An error occurred, please try again later.'
            );
        }
        console.log(response.data);
        setCategory(response.data.categoryProducts);
        setIsLoading(false);
    };

    return {
        isLoading,
        getCategoryProduct,
        categoryProduct: category
    }
};

