import { useEffect } from "react";
import accept from "../../assets/iconAdmin/accept.svg";
import deleteUser from "../../assets/iconHistoryList/deleteUser.svg";

import "../../styles/homePageAdmin/ListApproval.css";

import { useAccountPetition, useAccount } from "../../shared/hooks";

export const ListApprovalAccount = () => {
  const { getAccountPetition, accountPetitions, isLoading } =
    useAccountPetition();

  const { aceptPetition, loading } = useAccount();

  useEffect(() => {
    getAccountPetition();
  }, [loading]);

  const handleApprove = (event) => {
    event.preventDefault();

    aceptPetition({ noPetition: event.target.id });
  };

  return (
    <section className="section-list-approve">
      <div className="container-approve-message">
        <h1 className="message-approve">Approval Account List</h1>
      </div>
      <div className="container-table-approve">
        <table className="table-approve-user">
          <thead className="container-titles-info-approve">
            <tr>
              <th>NoPetition</th>
              <th>DPI</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td>Loading...</td>
              </tr>
            ) : (
              Array.isArray(accountPetitions) &&
              accountPetitions.map((accountPetitions) => (
                <tr
                  className="approve-container-info"
                  key={accountPetitions.noPetition}
                >
                  <td className="info-user-approve">
                    {accountPetitions.noPetition}
                  </td>
                  <td className="info-user-approve">
                    {accountPetitions.DPI_Owner}
                  </td>
                  <td className="info-user-approve">Waiting for approval</td>
                  <td className="info-user-approve">
                    <button className="btn-approve">
                      <img
                        src={accept}
                        alt=""
                        id={accountPetitions.noPetition}
                        onClick={handleApprove}
                      />
                    </button>
                  </td>
                  <td className="info-user-approve">
                    <button className="btn-approve">
                      <img src={deleteUser} alt="" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
