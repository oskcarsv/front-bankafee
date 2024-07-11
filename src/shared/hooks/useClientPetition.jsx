import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  clientPetition as clientPetitionRequest,
  getClientPetitions as getClientPetitionsRequest,
} from "../../services/api";

import { toast } from "react-hot-toast";

export const useClientPetition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [clientPetitions, setClientPetitions] = useState();
  const navigate = useNavigate();

  const clientPetition = async (
    name,
    username,
    DPI,
    adress,
    email,
    phoneNumber,
    workPlace,
    monthlyIncome,
    aliasAccount,
    typeAccount,
  ) => {
    setIsLoading(true);

    const response = await clientPetitionRequest({
      name,
      username,
      DPI,
      adress,
      email,
      phoneNumber,
      workPlace,
      monthlyIncome,
      aliasAccount,
      typeAccount,
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

    console.log(response.data.msg);

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

    navigate("/");
  };

  const getClientPetitions = async () => {
    setIsLoading(true);

    const response = await getClientPetitionsRequest();

    setIsLoading(false);

    if (response.error) {
      console.log(response.error);
      console.log(response.e);
      console.log(response.e?.response);
      console.log(response.e?.response?.data);

      return toast.error(
        response.e?.response?.data ||
          "A ocurrido un error, por favor intente más tarde.",
      );
    }

    setClientPetitions(response.data.clientPetition);
    setIsLoading(false);
  };

  return {
    clientPetition,
    getClientPetitions,
    clientPetitions,
    isLoading,
  };
};
