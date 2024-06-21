import '../../styles/homePageCss/recentActivity.css';

export const ListRecentActivity = () => {
    return (
        <div className="content-history">
            <div className="title-activity">
                <h1 className='title-activity-recent'>Recent Activity</h1>
            </div>
            <div className='item-activity'>
                <div className="sub-title-activity">
                    <h3>Deposit of:</h3>
                    <h3>No. Account</h3>
                    <h3>Date and time</h3>
                </div>
                <div className="info-activity">
                    <p>GTQ 100.00 to Angel</p>
                    <p>5124 02151 2121</p>
                    <p>2024/05/10 - 5:55 pm</p>
                </div>
            </div>
            <div className='separator'>
                <hr className='s' />
            </div>
            <div className='item-activity'>
                <div className="sub-title-activity">
                    <h3>Deposit of:</h3>
                    <h3>No. Account</h3>
                    <h3>Date and time</h3>
                </div>
                <div className="info-activity">
                    <p>GTQ 100.00 to Angel</p>
                    <p>5124 02151 2121</p>
                    <p>2024/05/10 - 5:55 pm</p>
                </div>
            </div>
        </div>

    );
};