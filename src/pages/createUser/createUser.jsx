import { Slide } from "../../components/Slide";
import { FormCreateUser } from "../../components/createUser/FormCreateUser";

import "../../pages/createUser/createUser.css";

export const CreateUser = () => {
  return (
    <main className="cAccountBU-container">
      <section className="form-account-container">
        <FormCreateUser />
      </section>
      <section className="slide-account-container">
        <Slide />
      </section>
    </main>
  );
};
