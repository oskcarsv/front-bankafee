import { Slide } from "../../components/Slide";
import { FormEditAdmin } from '../../components/formEditByAdmin/FormEditAdmin'

import '../../pages/formEditUserByAdmin/formEditByAdmin.css'

export const FormEditByAdmin = () => {
    return (
        <>
            <main className="cAccountBU-container">
                <section className="form-account-container">
                    <FormEditAdmin />
                </section>
                <section className="slide-account-container">
                    <Slide />
                </section>
            </main>
        </>
    );
}