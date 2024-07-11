import { useEffect } from "react";
import "../../styles/serviceCss/serviceContent.css";
import { ServiceContainer } from "./ServiceContainer.jsx";
import { useGetServices } from "../../shared/hooks/services/useServices";

export const ServiceContent = () => {
  const { isLoading, services, getServices } = useGetServices();

  useEffect(() => {
    getServices();
  }, []);

  return (
    <main className="main-service-container">
      <section className="title-container">
        <h1 className="title-service">¡Promociones del mes!</h1>
      </section>
      <section className="services-container">
        {isLoading && <p>Cargando...</p>}
        {!isLoading &&
          services.map((service) => (
            <ServiceContainer
              key={service.id}
              description={service.description}
              enterprise={service.enterprise}
              discountCode={service.discountCode}
            />
          ))}
      </section>
    </main>
  );
};
