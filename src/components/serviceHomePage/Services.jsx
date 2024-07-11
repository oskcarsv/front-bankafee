import { ContentService } from "./ContentService";

import "../../styles/serviceHomPage/services.css";

export const Services = () => {
  return (
    <section className="section-service-page">
      <div className="content-service-page">
        <ContentService />
        <ContentService />
        <ContentService />
        <ContentService />
      </div>
    </section>
  );
};
