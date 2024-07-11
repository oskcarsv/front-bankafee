import { Link } from "react-router-dom";

import edit from "../../assets/iconAdmin/edit.svg";
import deleteUser from "../../assets/iconHistoryList/deleteUser.svg";

import "../../styles/listUserAdmin/listForAllUser.css";

export const ListForAllUser = () => {
  return (
    <section className="section-all-users-admin">
      <div className="content-title-list-user-admin">
        <h1 className="title-list">List Users</h1>
      </div>
      <div className="content-history-users-for-admin">
        <table className="table-list-users-for-admin">
          <thead className="content-titles-table">
            <tr>
              <th>Name</th>
              <th>Account</th>
              <th>DPI</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr className="info-users-list-admin">
              <td className="info--table-users">Angel</td>
              <td className="info--table-users">Monetaria</td>
              <td className="info--table-users">123456789120</td>
              <td className="info--table-users">Active</td>
              <td className="info-user-approve">
                <Link to="/formEditByAdmin">
                  <button className="btn-approve">
                    <img src={edit} alt="" />
                  </button>
                </Link>
              </td>
              <td className="info-user-approve">
                <button className="btn-approve">
                  <img src={deleteUser} alt="" />
                </button>
              </td>
            </tr>
            <tr className="info-users-list-admin">
              <td className="info--table-users">Angel</td>
              <td className="info--table-users">Monetaria</td>
              <td className="info--table-users">123456789120</td>
              <td className="info--table-users">Active</td>
              <td className="info-user-approve">
                <Link to="/formEditByAdmin">
                  <button className="btn-approve">
                    <img src={edit} alt="" />
                  </button>
                </Link>
              </td>
              <td className="info-user-approve">
                <button className="btn-approve">
                  <img src={deleteUser} alt="" />
                </button>
              </td>
            </tr>
            <tr className="info-users-list-admin">
              <td className="info--table-users">Angel</td>
              <td className="info--table-users">Monetaria</td>
              <td className="info--table-users">123456789120</td>
              <td className="info--table-users">Active</td>
              <td className="info-user-approve">
                <Link to="/formEditByAdmin">
                  <button className="btn-approve">
                    <img src={edit} alt="" />
                  </button>
                </Link>
              </td>
              <td className="info-user-approve">
                <button className="btn-approve">
                  <img src={deleteUser} alt="" />
                </button>
              </td>
            </tr>
            <tr className="info-users-list-admin">
              <td className="info--table-users">Angel</td>
              <td className="info--table-users">Monetaria</td>
              <td className="info--table-users">123456789120</td>
              <td className="info--table-users">Active</td>
              <td className="info-user-approve">
                <Link to="/formEditByAdmin">
                  <button className="btn-approve">
                    <img src={edit} alt="" />
                  </button>
                </Link>
              </td>
              <td className="info-user-approve">
                <button className="btn-approve">
                  <img src={deleteUser} alt="" />
                </button>
              </td>
            </tr>
            <tr className="info-users-list-admin">
              <td className="info--table-users">Angel</td>
              <td className="info--table-users">Monetaria</td>
              <td className="info--table-users">123456789120</td>
              <td className="info--table-users">Active</td>
              <td className="info-user-approve">
                <Link to="/formEditByAdmin">
                  <button className="btn-approve">
                    <img src={edit} alt="" />
                  </button>
                </Link>
              </td>
              <td className="info-user-approve">
                <button className="btn-approve">
                  <img src={deleteUser} alt="" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
