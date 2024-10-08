import { Sidebar } from "../../components/homePage/Sidebar";
import { MessageHome } from "../../components/homePage/MessageHome";
import { ListCardAccount } from "../../components/homePage/ListCardAccount";
import { ActionsHome } from "../../components/homePage/ActionsHome";
import { ListRecentActivity } from "../../components/homePage/ListRecentActivity";

import "../../pages/homePage/homePage.css";

export const HomePage = () => {
  return (
    <>
      <main className="main-container-home">
        <nav className="sidebar-container">
          <Sidebar />
        </nav>
        <article className="home-page-container">
          <MessageHome />
          <ListCardAccount />
          <ActionsHome />
          <ListRecentActivity />
        </article>
      </main>
    </>
  );
};
