import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { postUser as postUserRequest } from "../../services/api";

export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postUser = async (clientNo_Petition) => {
    setLoading(true);

    const response = await postUserRequest(clientNo_Petition);

    if (response.error) {
      setLoading(false);
      console.log(response.error);
      console.log(response.e);
      console.log(response.e?.response);
      console.log(response.e?.response?.data);

      return toast.error(
        response.e?.response?.data ||
          "An error occurred, please try again later.",
      );
    }

    setLoading(false);
    return toast.success("Se ha aprobado el usuario correctamente");
  };

  return {
    postUser,
    loading,
  };
};
