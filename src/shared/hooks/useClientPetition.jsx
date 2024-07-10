import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { clientPetition as clientPetitionRequest } from "../../services/api";

import { toast } from "react-hot-toast";

export const useClientPetition = () => {

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const clientPetition = async (name, username, DPI, address, email, phoneNumber, workPlace, monthlyIncome, aliasAccount, typeAccount) => {

        setIsLoading(true);

        const response = await clientPetitionRequest({

            name, 
            username, 
            DPI, 
            address, 
            email, 
            phoneNumber, 
            workPlace, 
            monthlyIncome, 
            aliasAccount, 
            typeAccount

        });

        setIsLoading(false);

        if(response.error){

            console.log(response.error);
            console.log(response.e)
            console.log(response.e?.response)
            console.log(response.e?.response?.data)

            return toast.error(

                response.e?.response?.data ||

                "An error occurred, please try again later."

            )
        }

        navigate('/')

    }

    return {

        clientPetition,
        isLoading

    }

}