import accept from "../../assets/iconAdmin/accept.svg";
import deleteUser from "../../assets/iconHistoryList/deleteUser.svg";

import "../../styles/listAdminCredit/listCreditAdmin.css";

export const ListCreditAdmin = () => {
  return (
    <section className="section-list-credit">
      <div className="container-credit-message">
        <h1 className="message-list-credit">List Credits</h1>
      </div>
      <div className="container-table-credit">
        <table className="table-credit-list">
          <thead className="thead-credit-list">
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Time</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr-list-credit">
              <td className="info-user-credit">Angel</td>
              <td className="info-user-credit">Q. 1000.00</td>
              <td className="info-user-credit">Five months</td>
              <td className="info-user-credit">Payment</td>
              <td className="info-user-credit">
                <button className="btn-approve">
                  <img src={accept} alt="" />
                </button>
              </td>
              <td className="info-user-credit">
                <button className="btn-approve">
                  <img src={deleteUser} alt="" />
                </button>
              </td>
            </tr>
            <tr className="tr-list-credit">
              <td className="info-user-credit">Angel</td>
              <td className="info-user-credit">Q. 1000.00</td>
              <td className="info-user-credit">Five months</td>
              <td className="info-user-credit">Payment</td>
              <td className="info-user-credit">
                <button className="btn-approve">
                  <img src={accept} alt="" />
                </button>
              </td>
              <td className="info-user-credit">
                <button className="btn-approve">
                  <img src={deleteUser} alt="" />
                </button>
              </td>
            </tr>
            <tr className="tr-list-credit">
              <td className="info-user-credit">Angel</td>
              <td className="info-user-credit">Q. 1000.00</td>
              <td className="info-user-credit">Five months</td>
              <td className="info-user-credit">Payment</td>
              <td className="info-user-credit">
                <button className="btn-approve">
                  <img src={accept} alt="" />
                </button>
              </td>
              <td className="info-user-credit">
                <button className="btn-approve">
                  <img src={deleteUser} alt="" />
                </button>
              </td>
            </tr>
            <tr className="tr-list-credit">
              <td className="info-user-credit">Angel</td>
              <td className="info-user-credit">Q. 1000.00</td>
              <td className="info-user-credit">Five months</td>
              <td className="info-user-credit">Payment</td>
              <td className="info-user-credit">
                <button className="btn-approve">
                  <img src={accept} alt="" />
                </button>
              </td>
              <td className="info-user-credit">
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
