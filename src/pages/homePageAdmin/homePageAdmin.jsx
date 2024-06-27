import { SidebarAdmin } from '../../components/SidebarAdmin';
import { MessageAdmin } from '../../components/homePageAdmin/MessageAdmin';
import { ActionsAdmin } from '../../components/homePageAdmin/ActionAdmin';

import '../../pages/homePageAdmin/homePageAdmin.css';

export const HomePageAdmin = () => {
    return (
        <>
            <main className="main-container-admin-page">
                <nav className="sidebar-admin-container">
                    <SidebarAdmin />
                </nav>
                <article className="admin-home-page-container">
                    <MessageAdmin />
                    <ActionsAdmin />
                    {/* <ActionsHomeAdmin /> */}
                    {/* <ListRecentActivityAdmin /> */}
                </article>
            </main>
        </>
    );
}