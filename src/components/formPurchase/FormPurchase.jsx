import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCategoryProduct } from "../../shared/hooks/useCategoryProduct";

import compraComputadora from "../../assets/iconsProduct/compraComputadora.svg";

import "../../styles/formPurchase/formPurchase.css";

export const FormPurchase = ({ name, description, img, price }) => {
  return (
    <section className="section-form-buy-product">
      <div className="content-name-product">
        <h1 className="name-product">{name}</h1>
      </div>
      <hr />
      <div className="content-product-info">
        <div className="content-buy-product">
          <img src={img} alt="img" className="img-product" />
        </div>
        <div className="content-info-product">
          <div className="content-price-product">
            <h3 className="price-product">{price}</h3>
          </div>
          <div className="content-title-description">
            <h3 className="description-product">Description</h3>
          </div>
          <div className="content-description">
            <p className="description">{description}</p>
          </div>
          <form className="form-buy">
            <div className="content-input-buy">
              <select className="input-buy-product">
                <option value="" disabled selected>
                  Seleccione una opción
                </option>
                <option value="">Monetaria</option>
                <option value="">Ahorro</option>
              </select>
            </div>
            <div className="content-input-buy">
              <input
                type="number"
                placeholder="Monthly"
                className="input-buy-product"
              />
            </div>
            <div className="content-btn-buy">
              <Link to="/home" className="link-btn">
                <button className="btn-buy">Buy</button>
              </Link>
              <Link to="/productCategory" className="link-btn">
                <button className="btn-buy-cancel">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};