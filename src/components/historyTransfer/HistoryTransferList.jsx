import '../../styles/allHistoryUser/historyTransfer.css'

export const HistoryTransferList = () => {
    return (
        <section className="table-transfer-user">
            <div className="content-title-transfer-history">
                <h1 className="title-transfer-history">
                    Recent Activity
                </h1>
            </div>
            <div className="content-transfer-table">
                <table className="table-transfer-list">
                    <thead className="titles-list-info-transfer">
                        <tr>
                            <th>No. Account</th>
                            <th>Alias</th>
                            <th>Type account</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="info-transfer-list">
                            <td className="transfer-info-list">84984 05 4050</td>
                            <td className="transfer-info-list">Angel</td>
                            <td className="transfer-info-list">Monetaria</td>
                        </tr>
                        <tr className="info-transfer-list">
                            <td className="transfer-info-list">84984 05 4050</td>
                            <td className="transfer-info-list">Angel</td>
                            <td className="transfer-info-list">Monetaria</td>
                        </tr>
                        <tr className="info-transfer-list">
                            <td className="transfer-info-list">84984 05 4050</td>
                            <td className="transfer-info-list">Angel</td>
                            <td className="transfer-info-list">Monetaria</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};