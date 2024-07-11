import { Link } from "react-router-dom";

import logoPizzaHot from "../../assets/iconServicesUser/logoPizzaHut.svg";

export const ContentService = () => {
  return (
    <Link to="/serviceCategory" className="link-service">
      <div className="card-service">
        <img src={logoPizzaHot} alt="img" className="img-service-user" />
        <p className="title-service-user">Descuento en Pizza Hot de un 50% </p>
      </div>
    </Link>
  );
};
