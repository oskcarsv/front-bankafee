import { FormRequestAccount } from "../../components/landingPages/FormRequestAccount";
import { Slide } from "../../components/Slide";

import "../../pages/requestAccount/requestAccount.css";

export const RequestAccount = () => {
  return (
    <>
      <div className="form-request-account">
        <FormRequestAccount />
      </div>
      <div className="content-slide-page">
        <Slide />
      </div>
    </>
  );
};
