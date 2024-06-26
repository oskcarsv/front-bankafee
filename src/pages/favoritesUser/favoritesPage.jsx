import { Sidebar } from "../../components/homePage/Sidebar";
import { MessageFavorite } from "../../components/listFavorites/MessageFavorite";
import { ListFavorites } from "../../components/listFavorites/ListFavorites";

import '../../pages/favoritesUser/favoritesPage.css';

export const FavoritesPage = () => {
    return (
        <>
            <main className="main-container-favorites">
                <nav className="sidebar-favorites">
                    <Sidebar />
                </nav>
                <article className="content-favorites-user">
                    <MessageFavorite />
                    <ListFavorites />
                </article>
            </main>
        </>
    );
}