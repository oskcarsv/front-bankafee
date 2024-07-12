import { useState } from "react";
import toast from "react-hot-toast";
import { myDeposits as myDepositsRequest } from "../../../services/api";

export const useGetDeposits = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [deposits, setDeposits] = useState([]);

    const getDeposits = async (noAccount) => {
        setIsLoading(true);
        const response = await myDepositsRequest({noAccount});
        if (response.error && response.e) {
            setIsLoading(false);
            console.log(response.error);
            return toast.error("Error al obtener los datos");
        }
        console.log(response);
        setDeposits(response.data.deposits);
        setIsLoading(false);
    };

    return {
        isLoading,
        deposits,
        getDeposits,
    };
};