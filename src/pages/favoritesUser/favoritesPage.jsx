import { Sidebar } from "../../components/homePage/Sidebar";

export const FavoritesPage = () => {
    return (
        <>
            <main className="main-container-favorites">
                <nav className="sidebar-favorites">
                    <Sidebar />
                </nav>
                <article className="content-favorites-user">

                </article>
            </main>
        </>
    );
}