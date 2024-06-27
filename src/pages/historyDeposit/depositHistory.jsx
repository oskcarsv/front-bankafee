import { Sidebar } from "../../components/homePage/Sidebar";
import { MessageAllHistory } from "../../components/historyTransfer/MessageAllHistory";

import '../../pages/historyDeposit/depositHistory.css';


export const DepositHistory = () => {
    return (
        <>
            <main className="main-container-deposit">
                <nav className="sidebar-container">
                    <Sidebar />
                </nav>
                <article className="container-info-history-deposit">
                    <MessageAllHistory />
                </article>
            </main>
        </>
    );
}