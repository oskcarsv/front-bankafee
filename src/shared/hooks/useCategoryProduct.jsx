import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  getCategoryProduct as categoryProductRequest,
  getProductForCategory as categoryForProductRequest,
} from "../../services/api";

export const useCategoryProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState();
  const navigate = useNavigate();

  const getCategoryProduct = async () => {
    setIsLoading(true);
    const response = await categoryProductRequest();
    if (response.error && response.e) {
      setIsLoading(false);
      return toast.error("An error occurred, please try again later.");
    }
    setCategory(response.data.categoryProducts);
    setIsLoading(false);
    console.log(response);
  };


  const getProductForCategory = async (id) => {
    setIsLoading(true);
    const response = await categoryForProductRequest(id);

    if (response.error) {
      setIsLoading(false);
      return toast.error("Error al obtener las categorias");

    }
    setCategory(response.data.products);
    setIsLoading(false);
  };



  return {
    isLoading,
    getCategoryProduct,
    getProductForCategory,
    categoryProduct: category,
  };
};
