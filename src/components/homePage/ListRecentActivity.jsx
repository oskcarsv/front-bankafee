import '../../styles/homePageCss/recentActivity.css';

export const ListRecentActivity = () => {
    return (
        <section className="table-homePage">
            <div className="title-table-homePage">
                <h1 className="title-recent-activity">Recent Activity</h1>
            </div>
            <div className="content-history-homePage">
                <table className="table-recent-activity-homepage">
                    <tr className="recent-activity-title">
                        <th className="title-principal-info">Deposit of</th>
                        <th className="title-principal-info">No. Account</th>
                        <th className="title-principal-info">Date and Time</th>
                    </tr>
                    <tr className="recent-activity-info">
                        <td className="info-recent-activity">GTQ 100.00 to Angel</td>
                        <td className="info-recent-activity">54121 21020 1211</td>
                        <td className="info-recent-activity">2024/12/25 - 5:55 pm</td>
                    </tr>
                </table>
            </div>
            <hr />
        </section>
    );
};