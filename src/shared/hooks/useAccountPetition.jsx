import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { accountPetition as accountPetitionRequest } from "../../services/api"

import { toast } from "react-hot-toast"

export const useAccountPetition = () => {
    
    const [isLoading, setIsLoading] = useState(false);

    const [accountPetition, setAccountPetition] = useState();

    const navigate = useNavigate();

    const postAccountPetition = async (

        type,
        DPI_Owner,
        alias,
        amount

    ) => {

        setIsLoading(true);

        const response = await accountPetitionRequest({

            type,
            DPI_Owner,
            alias,
            amount

        });

        setIsLoading(false);

        if (response.error) {

            console.log(response.error);

            console.log(response.e);

            console.log(response.e?.response);

            console.log(response.e?.response?.data);

            return toast.error(
                response.e?.response?.data ||
                  "An error occurred, please try again later.",
              );

        }

        toast.success(
            (t) => (
              <span>
                {response.data.msg} <br />
                <button
                  onClick={() => toast.dismiss(t.id)}
                  style={{
                    background: "transparent",
                    border: "none",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    margin: "5px",
                  }}
                >
                  X
                </button>
              </span>
            ),
            { duration: Infinity },
        );

        navigate("/home")

    }

    return {

        isLoading,

        postAccountPetition,

        accountPetition

    };

}