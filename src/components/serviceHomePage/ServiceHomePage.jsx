import { Sidebar } from "../homePage/Sidebar";
import { ServiceHomePage } from "../../components/serviceHomePage/ServiceHomePage";

export const ServiceHomePage = () => {
    return (
        <>
            <div className="sidebar-service">
                <Sidebar />
            </div>
            <div className="content-service">
                <ServiceHomePage />
            </div>
        </>
    );
}