import transfer from "../../assets/iconLanding/transfer.svg";

import "../../styles/landingPagesCss/sectionTransfer.css";

export const SectionTransfer = () => {
  return (
    <section className="section-tool-transfer" id="transferTool">
      <div className="section-transfer">
        <p className="text-1-transfer">
          Transferencias más fáciles, más seguras, más tuyas
        </p>
        <img
          src={transfer}
          alt="img-transfer"
          className="img-transfer-section"
        />
      </div>
    </section>
  );
};
