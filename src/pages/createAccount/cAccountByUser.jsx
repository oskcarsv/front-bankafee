import { FormCAccount } from "../../components/createAccount/FormCAccount";
import { Slide } from "../../components/Slide";

import '../../pages/createAccount/pagecAccountByUser.css'

export const CAccountByUser = () => {
    return (
        <main className="cAccountBU-container">
            <section className="form-account-container">
                <FormCAccount />
            </section>
            <section className="slide-account-container">
                {/* <Slide /> */}
            </section>
        </main>
    );
}