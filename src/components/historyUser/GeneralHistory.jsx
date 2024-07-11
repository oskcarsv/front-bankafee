import "../../styles/historyUser/generalHistory.css";

export const GeneralHistory = () => {
  return (
    <section className="content-table">
      <div className="title-table">
        <h1 className="title-history">Last movements</h1>
      </div>
      <div className="content-info-table">
        <table className="table-title">
          <thead className="content-titles-history">
            <tr>
              <th>Deposit of</th>
              <th>No. Account</th>
              <th>Date and Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-info">
              <td className="info-table">GTQ 100.00 to Angel</td>
              <td className="info-table">54121 21020 1211</td>
              <td className="info-table">2024/12/25 - 5:55 pm</td>
            </tr>
            <tr className="table-info">
              <td className="info-table">GTQ 100.00 to Angel</td>
              <td className="info-table">54121 21020 1211</td>
              <td className="info-table">2024/12/25 - 5:55 pm</td>
            </tr>
            <tr className="table-info">
              <td className="info-table">GTQ 100.00 to Angel</td>
              <td className="info-table">54121 21020 1211</td>
              <td className="info-table">2024/12/25 - 5:55 pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
