import { Sidebar } from "../../components/homePage/Sidebar.jsx";
import { MessageHistory } from "../../components/historyUser/MessageHistory.jsx";
import { ListHistoryUser } from "../../components/historyUser/ListHistoryUser.jsx";
import { GeneralHistory } from "../../components/historyUser/GeneralHistory.jsx";

import "../../pages/historyUser/historyUser.css";

export const HistoryUser = () => {
  return (
    <>
      <main className="main-container-user">
        <nav className="sidebar-history">
          <Sidebar />
        </nav>
        <article className="content-history-general">
          <MessageHistory />
          <ListHistoryUser />
          <GeneralHistory />
        </article>
      </main>
    </>
  );
};