import { Sidebar } from "../../components/homePage/Sidebar";
import { MessageAllHistory } from "../../components/historyTransfer/MessageAllHistory";
import { HistoryTransferList } from "../../components/historyTransfer/HistoryTransferList";

export const HistoryTransfer = () => {
    return (
        <>
            <main className="main-container-home">
                <nav className='sidebar-container'>
                    <Sidebar />
                </nav>
                <article className='home-page-container'>
                    <MessageAllHistory />
                    <HistoryTransferList />
                </article>
            </main>
        </>
    );
};