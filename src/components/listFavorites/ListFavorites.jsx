import deleteUser from "../../assets/iconHistoryList/deleteUser.svg";

import "../../styles/favorites/listFavorites.css";

export const ListFavorites = () => {
  return (
    <section className="table-favorite-user">
      <div className="content-title-favorites">
        <h1 className="title-favorites">Recent Activity</h1>
      </div>
      <div className="content-favorites-table">
        <table className="table-list-favorites">
          <thead className="title-info-list">
            <tr>
              <th>No. Account</th>
              <th>Alias</th>
              <th>Type account</th>
            </tr>
          </thead>
          <tbody>
            <tr className="info-user-list">
              <td className="info-user-favorite">84984 05 4050</td>
              <td className="info-user-favorite">Angel</td>
              <td className="info-user-favorite">Monetaria</td>
              <td className="info-user-favorite">
                <button className="btn-delete-user">
                  <img src={deleteUser} alt="" />
                </button>
              </td>
            </tr>
            <tr className="info-user-list">
              <td className="info-user-favorite">84984 05 4050</td>
              <td className="info-user-favorite">Soto</td>
              <td className="info-user-favorite">Ahorro</td>
              <td className="info-user-favorite">
                <button className="btn-delete-user">
                  <img src={deleteUser} alt="" />
                </button>
              </td>
            </tr>
            <tr className="info-user-list">
              <td className="info-user-favorite">84984 05 4050</td>
              <td className="info-user-favorite">Oscar</td>
              <td className="info-user-favorite">Credito</td>
              <td className="info-user-favorite">
                <button className="btn-delete-user">
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
