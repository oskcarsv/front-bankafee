import { Slide } from "../../components/Slide";
import { FormCreditRequest } from "../../components/creditRequest/FormCreditRequest";

export const CreditRequest = () => {
  return (
    <main className="cAccountBU-container">
      <section className="form-account-container">
        <FormCreditRequest />
      </section>
      <section className="slide-account-container">
        <Slide />
      </section>
    </main>
  );
};
