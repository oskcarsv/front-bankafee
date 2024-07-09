import { Slide } from "../../components/Slide";
import { DepositForm } from "../../components/deposit/Deposit";

import "../../pages/deposit/depositPage.css";

export const DepositPage = () => {
  return (
    // <>
    //   <div className="form-deposit-user">
    //     <DepositForm />
    //   </div>
    //   <div className="content-slide-page">
    //     <Slide />
    //   </div>
    // </>
    <main className="cAccountBU-container">
      <section className="form-account-container">
        <DepositForm />
      </section>
      <section className="slide-account-container">
        <Slide />
      </section>
    </main>
  );
};
