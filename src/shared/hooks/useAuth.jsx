import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { login as loginRequest } from "../../services/api";

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (username, password) => {
        setIsLoading(true);
        const response = await loginRequest({ username, password });
        if (response.error && response.e) {
            setIsLoading(false);
            return toast.error(
                "An error occurred, please try again later."
            );
        }
        const { user, token } = response.data;
        localStorage.setItem("token", JSON.stringify({token:token, DPI: user.DPI, no_Account: user.no_Account, role:user.role}));
        setIsLoading(false);
        if(user.role ==="ADMIN_ROLE"){
            navigate('/homeAdmin');
        }else{
            navigate('/home');
        }
        return toast.success(`${response.data.msg}`);
    }
    return { isLoading, login };
}