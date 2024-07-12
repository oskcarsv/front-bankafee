import { useState } from "react";

export const ListRecentActivityContent = ({ amount, dateTime }) => {

    return (
        <tr className="recent-activity-info">
            <td className="info-recent-activity">GTQ {amount}</td>
            <td className="info-recent-activity">{dateTime}</td>
        </tr>
    )
};