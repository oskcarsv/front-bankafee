import { Slide } from "../../components/Slide";
import { DepositForm } from "../../components/deposit/Deposit";

import '../../pages/deposit/depositPage.css'

export const DepositPage = () => {
    return (
        <>
            <div className="form-deposit-user">
                <DepositForm />
            </div>
            <div className="content-slide-page">
                <Slide />
            </div>
        </>
    );
};