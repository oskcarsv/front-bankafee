import { Sidebar } from "../../components/homePage/Sidebar";
import { MessageAllHistory } from "../../components/historyTransfer/MessageAllHistory";
import { HistoryCreditList } from "../../components/historyCredit/HistoryCreditList";

import '../../pages/historyCredit/historyCredit.css';

export const HistoryCredit = () => {
    return (
        <>
            <main className="main-container-credit">
                <nav className="sidebar-container">
                    <Sidebar />
                </nav>
                <article className="container-info-history-credit">
                    <MessageAllHistory />
                    <HistoryCreditList />
                </article>
            </main>
        </>
    );
};