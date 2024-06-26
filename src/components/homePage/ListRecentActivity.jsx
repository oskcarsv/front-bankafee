import TransferIcon from '../../assets/iconHomePage/TransferIcon.svg';
import '../../styles/homePageCss/recentActivity.css';

export const ListRecentActivity = () => {
    return (
        <section className="table-homePage">
            <div className="title-table-homePage">
                <h1 className="title-recent-activity">Recent Activity</h1>
            </div>
            <div className="content-history-homePage">
                <table className='table-recent-activity-homepage'>
                    <thead className='recent-activity-title'>
                        <tr>
                            <th>Deposit of</th>
                            <th className='noAccount'>No. Account</th>
                            <th>Date and Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='recent-activity-info'>
                            <td className='icon-transfer-container'>
                                <img src={TransferIcon} alt='Transfer Icon' className='transfer-icon' />
                            </td>
                            <td className='info-recent-activity'>GTQ 100.00 to Angel</td>
                            <td className='info-recent-activity noAccount'>54121 21020 1211</td>
                            <td className='info-recent-activity'>2024/12/25 - 5:55 pm</td>
                        </tr>
                        <tr className='recent-activity-info'>
                            <td className='icon-transfer-container'>
                                <img src={TransferIcon} alt='Transfer Icon' className='transfer-icon' />
                            </td>
                            <td className='info-recent-activity'>GTQ 100.00 to Angel</td>
                            <td className='info-recent-activity noAccount'>54121 21020 1211</td>
                            <td className='info-recent-activity'>2024/12/25 - 5:55 pm</td>
                        </tr>
                        <tr className='recent-activity-info'>
                            <td className='icon-transfer-container'>
                                <img src={TransferIcon} alt='Transfer Icon' className='transfer-icon' />
                            </td>
                            <td className='info-recent-activity'>GTQ 100.00 to Angel</td>
                            <td className='info-recent-activity noAccount'>54121 21020 1211</td>
                            <td className='info-recent-activity'>2024/12/25 - 5:55 pm</td>
                        </tr>
                        <tr className='recent-activity-info'>
                            <td className='icon-transfer-container'>
                                <img src={TransferIcon} alt='Transfer Icon' className='transfer-icon' />
                            </td>
                            <td className='info-recent-activity'>GTQ 100.00 to Angel</td>
                            <td className='info-recent-activity noAccount'>54121 21020 1211</td>
                            <td className='info-recent-activity'>2024/12/25 - 5:55 pm</td>
                        </tr>
                        <tr className='recent-activity-info'>
                            <td className='icon-transfer-container'>
                                <img src={TransferIcon} alt='Transfer Icon' className='transfer-icon' />
                            </td>
                            <td className='info-recent-activity'>GTQ 100.00 to Angel</td>
                            <td className='info-recent-activity noAccount'>54121 21020 1211</td>
                            <td className='info-recent-activity'>2024/12/25 - 5:55 pm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};
