import { Link } from "react-router-dom";

import homeIcon from '../../assets/iconsProduct/homeIconProductPage.svg'
import goBackIcon from '../../assets/iconsProduct/goBackIconProductPage.svg'

import "../../styles/productHomePage/titleProduct.css";

export const TitleProductHome = () => {
  const currentPath = window.location.pathname;

  return (
    <div className="section-product-title">
      <div className="content-titles">
        <div>
          {currentPath === "/productHomePage" ? (
            <h1 className="title-product-home">Product </h1>
          ) : (
            <h1 className="title-product-home">Product Category</h1>
          )}

        </div>
        <div className="content-btn">
          <button className="btn-back">
            {currentPath === "/productHomePage" ? (
              <Link to="/home" className="link-back">
                <img src={homeIcon} alt="home" className="home-icon" />
              </Link>
            ) : (
              <Link to="/productHomePage" className="link-back backIcon">
                <img src={goBackIcon} alt="go back" className="go-back-icon" />
              </Link>
            )}
          </button>
        </div>
      </div>
      <hr className="s" />
    </div>
  );
};
