import "../../styles/serviceCss/serviceContent.css";

import { useState, useEffect } from "react";

export const ServiceContainer = ({ description, enterprise, discountCode }) => {
  const [copied, setCopied] = useState(false);
  const [existToken, setExistToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      setExistToken(true);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(discountCode);
    setCopied(true);
  };

  return (
    <>
      <div className="service-container sContainer">
        <p className="service-description">
          {description}
          <h1>{enterprise}</h1>
        </p>

        {existToken && (
          <>
            <p className="service-description">{discountCode}</p>
            <div className="button-container">
              <button className="service-button" onClick={handleCopy}>
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
