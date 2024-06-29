import { Slide } from "../../components/Slide";
import { FormCreateUser } from "../../components/createUser/FormCreateUser";

import "../../pages/createUser/createUser.css";

export const CreateUser = () => {
  return (
    <>
      <div className="form-createUser-page">
        <FormCreateUser />
      </div>
      <div className="content-slide-page">
        <Slide />
      </div>
    </>
  );
};
