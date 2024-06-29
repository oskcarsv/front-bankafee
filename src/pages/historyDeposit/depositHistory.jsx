import { Sidebar } from "../../components/homePage/Sidebar";
import { MessageAllHistory } from "../../components/historyTransfer/MessageAllHistory";
import { HistoryDeposit } from "../../components/historyDeposit/HistoryDeposit";

import '../../pages/historyDeposit/depositHistory.css';


export const DepositHistory = () => {
    return (
        <>
            <main className="main-container-home">
                <nav className="sidebar-container">
                    <Sidebar />
                </nav>
                <article className="home-page-container">
                    <MessageAllHistory />
                    <HistoryDeposit />
                </article>
            </main>
        </>
    );
}