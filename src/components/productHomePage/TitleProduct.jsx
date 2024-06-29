import { Link } from "react-router-dom";

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
            <h1 className="title-product-home">Category Home Page</h1>
          )}

        </div>
        <div className="content-btn">
          <button className="btn-back">
            <Link to="/home" className="link-back">
              {currentPath === "/productHomePage" ? (
                <p className="text-back">Home</p>
              ) : (
                <Link to="/productHomePage" className="link-back">
                  <p className="text-back">back</p>
                </Link>
              )}
            </Link>
          </button>
        </div>
      </div>
      <hr className="s" />
    </div>
  );
};
