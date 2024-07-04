import { Link } from "react-router-dom";

import compraComputadora from "../../assets/iconsProduct/compraComputadora.svg";

import "../../styles/formPurchase/formPurchase.css";

export const FormPurchase = () => {
  return (
    <section className="section-form-buy-product">
      <div className="content-name-product">
        <h1 className="name-product">Computer</h1>
      </div>
      <hr />
      <div className="content-product-info">
        <div className="content-img-product">
          <img src={compraComputadora} alt="img" className="img-product" />
        </div>
        <div className="content-info-product">
          <div className="content-price-product">
            <h3 className="price-product">$ 1,000.00</h3>
          </div>
          <div className="content-title-description">
            <h3 className="description-product">Description</h3>
          </div>
          <div className="content-description">
            <p className="description">
              Laptop Huawei Core i5, 13", 16GB RAM, 512GB SSD
            </p>
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
