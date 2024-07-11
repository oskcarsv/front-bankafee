import '../../styles/allHistoryUser/historyDeposit.css';

export const HistoryDeposit = () => {
    return (
        <section className="table-deposit-user">
            <div className="content-title-deposit-history">
                <h1 className="title-deposit-history">
                    Recent Activity Deposit
                </h1>
            </div>
            <div className="content-deposit-table">
                <table className="table-deposit-list">
                    <thead className="titles-list-info-deposit">
                        <tr>
                            <th>No. Account</th>
                            <th>Alias</th>
                            <th>Type account</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="info-deposit-list">
                            <td className="deposit-info-list">84984 05 4050</td>
                            <td className="deposit-info-list">Angel</td>
                            <td className="deposit-info-list">Monetaria</td>
                        </tr>
                        <tr className="info-deposit-list">
                            <td className="deposit-info-list">84984 05 4050</td>
                            <td className="deposit-info-list">Angel</td>
                            <td className="deposit-info-list">Monetaria</td>
                        </tr>
                        <tr className="info-deposit-list">
                            <td className="deposit-info-list">84984 05 4050</td>
                            <td className="deposit-info-list">Angel</td>
                            <td className="deposit-info-list">Monetaria</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};