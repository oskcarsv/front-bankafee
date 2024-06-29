import { Sidebar } from "../../components/homePage/Sidebar.jsx";
import { MessageHistory } from "../../components/historyUser/MessageHistory.jsx";
import { ListHistoryUser } from "../../components/historyUser/ListHistoryUser.jsx";
import { GeneralHistory } from "../../components/historyUser/GeneralHistory.jsx";

import "../../pages/historyUser/historyUser.css";

export const HistoryUser = () => {
  return (
    <>
      <div className="sidebar-history">
        <Sidebar />
      </div>
      <div className="content-history-view">
        <MessageHistory />
        <ListHistoryUser />
        <GeneralHistory />
      </div>
    </>
  );
};