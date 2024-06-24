import { Sidebar } from "../../components/homePage/Sidebar";
import { MessageHome } from "../../components/homePage/MessageHome";
import { ListCardAccount } from "../../components/homePage/ListCardAccount";
import { ActionsHome } from "../../components/homePage/ActionsHome";
import { ListRecentActivity } from "../../components/homePage/ListRecentActivity";

import '../../pages/homePage/homePage.css';

export const HomePage = () => {
    return (
        <>
            <div className="sidebar-home">
                <Sidebar />
            </div>
            {/* <div className="content-home">
                <MessageHome />
                <ListCardAccount />
                <div className="content-action-history">
                    <ActionsHome />
                    <ListRecentActivity />
                </div>
            </div> */}
        </>
    );
};