import { SidebarAdmin } from '../../components/SidebarAdmin';

import '../../pages/homePageAdmin/homePageAdmin.css';

export const HomePageAdmin = () => {
    return (
        <>
            <main className="main-container-admin-page">
                <nav className="sidebar-admin-container">
                    <SidebarAdmin />
                </nav>
                <article className="admin-home-page-container">
                    {/* <MessageHomeAdmin /> */}
                    {/* <ListCardAccountAdmin /> */}
                    {/* <ActionsHomeAdmin /> */}
                    {/* <ListRecentActivityAdmin /> */}
                </article>
            </main>
        </>
    );
}