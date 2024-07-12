import { useState } from "react";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import {
  aceptPetition as aceptPetitionRequest,
  denyPetition as denyPetitionRequest,
} from "../../services/api";

export const useAccount = () => {
  const [loading, setIsLoading] = useState(false);

  const [account, setAccount] = useState();

  const navigate = useNavigate();

  const aceptPetition = async (noPetition) => {
    setIsLoading(true);

    const response = await aceptPetitionRequest(noPetition);

    if (response.error) {
      setIsLoading(false);
      console.log(response.error);
      console.log(response.e);
      console.log(response.e?.response);
      console.log(response.e?.response?.data);

      return toast.error(
        response.e?.response?.data ||
          "An error occurred, please try again later.",
      );
    }

    setAccount(response.data.account);

    setIsLoading(false);

    console.log(account);

    return toast.success("Se ha aceptado la petición.");
  };

  const denyPetition = async (noPetition) => {
    setIsLoading(true);

    console.log(noPetition);

    const response = await denyPetitionRequest(noPetition);

    if (response.error) {
      setIsLoading(false);
      console.log(response.error);
      console.log(response.e);
      console.log(response.e?.response);
      console.log(response.e?.response?.data);

      return toast.error(
        response.e?.response?.data ||
          "An error occurred, please try again later.",
      );
    }

    setAccount(response.data.account);

    setIsLoading(false);

    return toast.success("Se ha denegado la petición.");
  };

  return {
    loading,
    denyPetition,
    aceptPetition,
    account,
  };
};
