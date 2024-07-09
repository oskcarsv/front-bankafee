import { Sidebar } from "../../components/homePage/Sidebar";
import { TitleService } from "../../components/serviceHomePage/TitleService";
import { Services } from "../../components/serviceHomePage/Services";

import "../../pages/serviceHomePage/serviceHomePage.css";

export const ServiceHomePage = () => {
  return (
    <>
      <main className="main-container-home">
        <nav className="sidebar-container">
          <Sidebar />
        </nav>
        <article className="home-page-container">
          <TitleService />
          <Services />
        </article>
      </main>
    </>
  );
};
