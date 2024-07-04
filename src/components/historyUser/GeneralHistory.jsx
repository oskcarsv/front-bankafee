import "../../styles/historyUser/generalHistory.css";

export const GeneralHistory = () => {
  return (
    <section className="content-table">
      <div className="title-table">
        <h1 className="title-history">Last movements</h1>
      </div>
      <div className="content-info-table">
        <table className="table-recent-activity-homepage">
          <thead className="recent-activity-title"> 
            <tr>
              <th>Deposit of</th>
              <th className="noAccount">No. Account</th>
              <th>Date and Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="recent-activity-info">
              <td className="info-recent-activity">GTQ 100.00 to Angel</td>
              <td className="info-recent-activity noAccount">54121 21020 1211</td>
              <td className="info-recent-activity">2024/12/25 - 5:55 pm</td>
            </tr>
            <tr className="recent-activity-info">
              <td className="info-recent-activity">GTQ 100.00 to Angel</td>
              <td className="info-recent-activity noAccount">54121 21020 1211</td>
              <td className="info-recent-activity">2024/12/25 - 5:55 pm</td>
            </tr>
            <tr className="recent-activity-info">
              <td className="info-recent-activity">GTQ 100.00 to Angel</td>
              <td className="info-recent-activity noAccount">54121 21020 1211</td>
              <td className="info-recent-activity">2024/12/25 - 5:55 pm</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
    </section>
  );
};