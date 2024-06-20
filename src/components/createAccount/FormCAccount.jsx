import cAccountByUser from "../../assets/iconCAccountByUser/cAccountByUser.svg";

import '../../styles/createAccountByUser/cAccountByUser.css'

export const FormCAccount = () => {
    return (
        <div className="content-form-cacount-user">
            <div className="info-form-caccount-user">
                <div className="img-caccount">
                    <img src={cAccountByUser} alt="img" className="img-caccount-user" />
                </div>
                <div className="title-form-caccount">
                    <h1 className="title-create-account">Create Account</h1>
                </div>
                <div className="content-input-caccount">
                    <form className="form-caccount-user">
                        <div className="input-text-create-account">
                            <input type="text" className="input-text" placeholder="Alias" />
                            <input type="text" className="input-text" placeholder="Monthly" />
                        </div>
                        <div className="content-input-dpi">
                            <input type="text" className="input-text-dpi" placeholder="DPI" />
                        </div>
                        <div className="content-input-combobox">
                            <select className="box-select">
                                <option value="">Monetaria</option>
                                <option value="">Ahorro</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className="btn-content-caccount">
                    <button className="btn-caccount-cancel">Cancel</button>
                    <button className="btn-caccount">Create</button>
                </div>
            </div>
        </div>
    );
};