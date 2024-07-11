import React, { useState } from "react";
import { postTransfer as postTransferRequest } from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useTransfer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [accounts, setAccounts] = useState();
  const navigate = useNavigate();

  const postTransfer = async (
    noOwnerAccount,
    noDestinationAccount,
    DPI_DestinationAccount,
    amount,
    description,
  ) => {
    setIsLoading(true);
    const response = await postTransferRequest({
      noOwnerAccount,
      noDestinationAccount,
      DPI_DestinationAccount,
      amount,
      description,
    });

    if (response.error) {
      setIsLoading(false);
      return toast.error("Error al realizar la transferencia");
    }
    setIsLoading(false);
    const { role } = JSON.parse(localStorage.getItem("token"));
    if (role == "ADMING_ROLE") {
      navigate("/homeAdmin");
    } else {
      navigate("/home");
    }
  };

  return {
    postTransfer,
    isLoading,
  };
};
