import '../../styles/historyUser/generalHistory.css';

export const GeneralHistory = () => {
    return (
        <section className="content-table">
            <div className="title-table">
                <h1 className="title-history">Last movements</h1>
            </div>
            <div className="content-info-table">
                <table className="table-content">
                    <tr className="table-header">
                        <th className="table-info">Action</th>
                        <th className="table-info">No. Account</th>
                        <th className="table-info">Date and time</th>
                    </tr>
                    <tr className="table-body">
                        <td className="info-table-body">GTQ 100.00 to Angel</td>
                        <td className="info-table-body">54121 21020 1211</td>
                        <td className="info-table-body">2024/12/25 - 5:55 pm</td>
                    </tr>
                </table>
            </div>
            <hr />
        </section >
    );
}