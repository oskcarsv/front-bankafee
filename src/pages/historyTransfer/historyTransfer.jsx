import { Sidebar } from "../../components/homePage/Sidebar";
import { MessageAllHistory } from "../../components/historyTransfer/MessageAllHistory";

import '../../pages/historyTransfer/historyTransfer.css';

export const HistoryTransfer = () => {
    return (
        <>
            <main className="main-container-transfer">
                <nav className='sidebar-container'>
                    <Sidebar />
                </nav>
                <article className='container-info-history-transfer'>
                    <MessageAllHistory />
                </article>
            </main>
        </>
    );
};