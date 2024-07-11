import service from "../../assets/iconLanding/service.svg";

import "../../styles/landingPagesCss/sectionService.css";

export const SectionService = () => {
  return (
    <section className="section-tool-service" id="servicesTool">
      <div className="section-service">
        <p className="text-1-service">
          Servicios fáciles, seguros y adaptados a todas tus necesidades.
        </p>
        <img src={service} alt="img-service" className="img-service-section" />
      </div>
    </section>
  );
};
