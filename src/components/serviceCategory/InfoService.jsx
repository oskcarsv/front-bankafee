import { Link } from "react-router-dom";

import promoPizzas from "../../assets/iconServicesUser/promoPizzas.svg";

import "../../styles/serviceCategory/infoService.css";

export const InfoService = () => {
  return (
    <section className="section-info-service">
      <div className="content-name-service">
        <h1 className="service-name-user">Name Service</h1>
      </div>
      <hr />
      <div className="content-service-info">
        <div className="content-img-service">
          <img src={promoPizzas} alt="img" className="icon-img-service" />
        </div>
        <div className="content-info-service">
          <div className="content-discount-service">
            <h3 className="discount-service">10% discount</h3>
          </div>
          <div className="content-title-service-description">
            <h3 className="title-description-service">Description</h3>
          </div>
          <div className="info-content">
            <p className="info">Buy 2 pizzas and get a 10% discount</p>
          </div>
          <form className="form-service-discount">
            <div className="content-input-service">
              <input
                type="text"
                placeholder="#token"
                className="input-service"
              />
            </div>
            <div className="content-input-service">
              <button className="btn-discount">See discount</button>
            </div>
            <Link to="/serviceHomePage" className="link-btn-infoService">
              <button className="btn-discount-back">Back</button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};
