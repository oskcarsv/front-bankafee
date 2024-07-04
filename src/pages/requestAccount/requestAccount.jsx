import { FormRequestAccount } from "../../components/landingPages/FormRequestAccount";
import { Slide } from "../../components/Slide";

import "../../pages/requestAccount/requestAccount.css";

export const RequestAccount = () => {
  return (
    <main className="cAccountBU-container">
      <section className="form-account-container">
        <FormRequestAccount />
      </section>
      <section className="slide-account-container">
        <Slide />
      </section>
    </main>
  );
};
