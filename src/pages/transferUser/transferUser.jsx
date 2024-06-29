import { Slide } from "../../components/Slide";
import { FormTransferUser } from "../../components/transferUser/FormTransferUser.jsx";

import "../../pages/transferUser/transferUser.css";

export const TransferUser = () => {
  return (
    <>
      <div className="content-transfer-user">
        <FormTransferUser />
      </div>
      <div className="content-slide-page">
        <Slide />
      </div>
    </>
  );
};
