import '../../styles/historyUser/generalHistory.css';

export const GeneralHistory = () => {
    return (
        <section className="content-table">
            <div className="title-table">
                <h1 className="title-history">Last movements</h1>
            </div>
            <div className="content-info-table">
                <table className="table-generali">
                    <thead className='thead-titles-generali'>
                        <tr>
                            <th>Deposit of</th>
                            <th>No. Account</th>
                            <th>Date and Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-body">
                            <td className="info-table-body">GTQ 100.00 to Angel</td>
                            <td className="info-table-body">54121 21020 1211</td>
                            <td className="info-table-body">2024/12/25 - 5:55 pm</td>
                        </tr>
                        <tr className="table-body">
                            <td className="info-table-body">GTQ 550.00 to Chino</td>
                            <td className="info-table-body">507821 21020 1211</td>
                            <td className="info-table-body">2024/01/01 - 8:55 am</td>
                        </tr>
                        <tr className="table-body">
                            <td className="info-table-body">GTQ 15.00 to Revo</td>
                            <td className="info-table-body">023621 21020 1211</td>
                            <td className="info-table-body">2023/12/31 - 11:00 am</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section >
    );
}