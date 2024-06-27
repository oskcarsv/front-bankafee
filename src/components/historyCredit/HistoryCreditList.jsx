import '../../styles/allHistoryUser/historyCreditList.css';

export const HistoryCreditList = () => {
    return (
        <section className="table-credit-user">
            <div className="content-title-credit-history">
                <h1 className="title-credit-history">
                    Recent Activity Credit
                </h1>
            </div>
            <div className="content-credit-table">
                <table className="table-credit-list">
                    <thead className="titles-list-info-credit">
                        <tr>
                            <th>No. Account</th>
                            <th>Alias</th>
                            <th>Type account</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="info-credit-list">
                            <td className="credit-info-list">84984 05 4050</td>
                            <td className="credit-info-list">Angel</td>
                            <td className="credit-info-list">Monetaria</td>
                        </tr>
                        <tr className="info-credit-list">
                            <td className="credit-info-list">84984 05 4050</td>
                            <td className="credit-info-list">Angel</td>
                            <td className="credit-info-list">Monetaria</td>
                        </tr>
                        <tr className="info-credit-list">
                            <td className="credit-info-list">84984 05 4050</td>
                            <td className="credit-info-list">Angel</td>
                            <td className="credit-info-list">Monetaria</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}