import { FormCAccount } from "../../components/createAccount/FormCAccount";
import { Slide } from "../../components/Slide";

import '../../pages/createAccount/cAccountByUser.css'

export const CAccountByUser = () => {
    return (
        <main>
            <div className="content-slide-form">
                <FormCAccount />
            </div>
            <div className="content-slide-page">
                <Slide />
            </div>
        </main>
    );
}