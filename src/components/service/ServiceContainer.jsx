import "../../styles/serviceCss/serviceContent.css";

import { useState } from "react";

export const ServiceContainer = ({
  description,
  enterprise,
  discountCode
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(discountCode);
    setCopied(true);
  };

  return (
    <>
      <div className="service-container sContainer">
        <p className="service-description">
          {description}
          <h1>
            {enterprise}
          </h1>
        </p>
        <p className="service-description">
          {discountCode}
        </p>
        <div className="button-container">
          <button className="service-button" onClick={handleCopy}>
            {copied ? "Copiado!" : "Copiar"}
          </button>
        </div>
      </div>
    </>
  );
};