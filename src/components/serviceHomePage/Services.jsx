import { useEffect } from "react";
import { ServiceContainer } from "../../components/service/ServiceContainer.jsx";
import { useGetServices } from "../../shared/hooks/services/useServices";


import "../../styles/serviceHomPage/services.css";

export const Services = () => {
  const { isLoading, services, getServices } = useGetServices();

  useEffect(() => {
    getServices();
  }, []);
  return (
    <section className="section-service-page">
      <div className="content-service-page">
        {isLoading && <p>Cargando...</p>}
        {!isLoading && services.map((service) => (
          <ServiceContainer
            key={service.id}
            description={service.description}
            enterprise={service.enterprise}
            discountCode={service.discountCode}
          />
        ))}
      </div>
    </section>
  );
};
