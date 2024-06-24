import { Link } from "react-router-dom";

export const FormCreateUser = () => {
    return ( 
        <section>
            <div>
                <div>
                    <h1>Create User</h1>
                </div> 
                <div>
                    <form>
                        <div>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="User Name" />
                        </div>
                        <div>
                            <input type="text" placeholder="Password" />
                        </div>
                        <div>
                            <input type="text" placeholder="Address" />
                        </div>
                        <div>
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Cel" />
                        </div>
                        <div>
                            <input type="text" placeholder="Workplace" />
                        </div>
                        <div>
                            <input type="text" placeholder="Monthly Income" />
                        </div>
                        <div>
                            <input type="text" placeholder="type account" />
                        </div>
                    </form>
                </div>
                <div>
                    <Link to="/home"><button>Create</button></Link>
                    <Link to="/home"><button>Cancel</button></Link>
                </div>
            </div>
        </section>
    );
};