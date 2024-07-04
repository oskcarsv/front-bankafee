import { Slide } from "../../components/Slide";
import { FormEditUser } from "../../components/editUser/FormEditUser";

import "../../pages/editUser/editUser.css";

export const EditUser = () => {
  return (
    // <>
    //   <div className="form-edit-user">
    //     <FormEditUser />
    //   </div>
    //   <div className="content-slide-page">
    //     <Slide />
    //   </div>
    // </>
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
