import { Sidebar } from "../../components/homePage/Sidebar";
import { TitleService } from "../../components/serviceHomePage/TitleService";
import { Services } from "../../components/serviceHomePage/Services";

import "../../pages/serviceHomePage/serviceHomePage.css";

export const ServiceHomePage = () => {
  return (
    <>
      <div className="sidebar-service">
        <Sidebar />
      </div>
      <div className="content-service">
        <TitleService />
        <Services />
      </div>
    </>
  );
};
