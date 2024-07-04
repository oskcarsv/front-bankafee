import { Slide } from "../../components/Slide";
import { FormEditUser } from "../../components/editUser/FormEditUser";

import "../../pages/editUser/editUser.css";

export const EditUser = () => {
  return (
    <main className="cAccountBU-container">
      <section className="form-account-container">
        <FormEditUser />
      </section>
      <section className="slide-account-container">
        <Slide />
      </section>
    </main>
  );
};
