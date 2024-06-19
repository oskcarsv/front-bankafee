import { Sidebar } from "../../components/homePage/Sidebar";
import { MessageHome } from "../../components/homePage/MessageHome";
import { CardAccount } from "../../components/homePage/CardAccount";
import { ListHome } from "../../components/homePage/ListHome";
import { RecentActivity } from "../../components/homePage/RecentActivity";

import '../../pages/homePage/homePage.css';

export const HomePage = () => {
    return (
        <>
            <div className="sidebar-home">
                <Sidebar />
            </div>
            <div className="content-home">
                <MessageHome />
                <CardAccount />
                <ListHome />
                <RecentActivity />
            </div>
        </>
    );
};