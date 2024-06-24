import { Link } from "react-router-dom";

import '../../styles/editUser/editUser.css'

export const FormEditUser = () => {
    return (
        <div className="content-form-edit-user">
            <div className="info-form-edit-user">
                <div className="title-form-edit-user">
                    <h1 className="title-edit-user">Edit User</h1>
                </div> 
                <div className="content-input-edit-user">
                    <form className="form-editUser">
                        <div className="input-together-edit">
                            <input type="text" placeholder="Name" className="input-text-edit-user" />
                            <input type="text" placeholder="User Name" className="input-text-edit-user" />
                        </div>
                        <div className="input-alone-edit-user">
                            <input type="password" placeholder="Password" className="input-text-alone-edit-user" />
                        </div>
                        <div className="input-alone-edit-user">
                            <input type="text" placeholder="Address" className="input-text-alone-edit-user" />
                        </div>
                        <div className="input-together-edit">
                            <input type="text" placeholder="Email" className="input-text-edit-user" />
                            <input type="text" placeholder="Cel" className="input-text-edit-user" />
                        </div>
                        <div className="input-alone-edit-user">
                            <input type="text" placeholder="Workplace" className="input-text-alone-edit-user" />
                        </div>
                        <div className="input-alone-edit-user">
                            <input type="text" placeholder="Monthly Income" className="input-text-alone-edit-user" />
                        </div>
                    </form>
                </div>
                <div className="btn-content-edit-user">
                    <Link to="/home" className="link-btn-edit-user"><button className="btn-edit-update-user">Update</button></Link>
                    <Link to="/home" className="link-btn-edit-user"><button className="btn-edit-cancel-user">Cancel</button></Link>
                </div>
            </div>
        </div>
    );
}