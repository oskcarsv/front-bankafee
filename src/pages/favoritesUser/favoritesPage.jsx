import { Sidebar } from "../../components/homePage/Sidebar";
import { MessageFavorite } from "../../components/listFavorites/MessageFavorite";
import { ListFavorites } from "../../components/listFavorites/ListFavorites";

import '../../pages/favoritesUser/favoritesPage.css';

export const FavoritesPage = () => {
    return (
        <>
            <main className="main-container-home">
                <nav className="sidebar-container">
                    <Sidebar />
                </nav>
                <article className="home-page-container">
                    <MessageFavorite />
                    <ListFavorites />
                </article>
            </main>
        </>
    );
}