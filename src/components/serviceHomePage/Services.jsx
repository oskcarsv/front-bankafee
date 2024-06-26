import { Link } from "react-router-dom";

import logoPizzaHot from "../../assets/iconServicesUser/logoPizzaHut.svg";

import "../../styles/serviceHomPage/services.css";

export const Services = () => {
    return (
        <section className="section-service-page">
            <div className="content-service-page">
                <Link to="/serviceCategory" className="link-service">
                    <div className="card-service">
                        <img src={logoPizzaHot} alt="img" className="img-service-user" />
                        <p className="title-service-user">Descuento en Pizza Hot de un 50% </p>
                    </div>
                </Link>
                <Link to="/" className="link-service">
                    <div className="card-service">
                        <img src={logoPizzaHot} alt="img" className="img-service-user" />
                        <p className="title-service-user">Descuento en Pizza Hot de un 50% </p>
                    </div>
                </Link>
                <Link to="/" className="link-service">
                    <div className="card-service">
                        <img src={logoPizzaHot} alt="img" className="img-service-user" />
                        <p className="title-service-user">Descuento en Pizza Hot de un 50% </p>
                    </div>
                </Link>
                <Link to="/" className="link-service">
                    <div className="card-service">
                        <img src={logoPizzaHot} alt="img" className="img-service-user" />
                        <p className="title-service-user">Descuento en Pizza Hot de un 50% </p>
                    </div>
                </Link>
            </div>
        </section>
    );
}