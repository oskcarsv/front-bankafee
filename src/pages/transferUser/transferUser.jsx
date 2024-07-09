import { Slide } from "../../components/Slide";
import { FormTransferUser } from "../../components/transferUser/FormTransferUser.jsx";

import "../../pages/transferUser/transferUser.css";

export const TransferUser = () => {
  return (
    <>
      <main className="cAccountBU-container">
        <section className="form-account-container">
          <FormTransferUser />
        </section>
        <section className="slide-account-container">
          <Slide />
        </section>
      </main>
    </>
  );
};
