import { useState } from "react";
import toast from "react-hot-toast";
import { getServices as getServicesRequest } from "../../../services/api";

export const useGetServices = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState([]);

  const getServices = async () => {
    setIsLoading(true);
    const response = await getServicesRequest();
    if (response.error && response.e) {
      setIsLoading(false);
      return toast.error("Error al obtener los servicios");
    }
    console.log(response.data);
    setServices(response.data.services);
    setIsLoading(false);
  };

  return {
    isLoading,
    services,
    getServices,
  };
};
