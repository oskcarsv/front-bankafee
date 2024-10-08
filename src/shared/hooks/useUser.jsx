import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { postUser as postUserRequest } from "../../services/api";
import { ownUser as OwnUserRequest } from "../../services/";

export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
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
  };

  const getOwnUser = async () => {
    setLoading(true);

    try {
      const response = await OwnUserRequest();

      setUser(response.data.user[0]);

      console.log(user);
    } catch (error) {
      console.log(response.error);
      console.log(response.e);
      console.log(response.e?.response);
      console.log(response.e?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return {
    postUser,
    getOwnUser,
    loading,
    user,
  };
};
