import { LandingPage } from "./pages/landingPage/landingPage.jsx";
import { LandingPageAboutUs } from "./pages/landingPageAboutUs/landingPageAboutUs.jsx";
import { LandingPageService } from "./pages/landingPageService/landingPageService.jsx";
import { LoginPage } from "./pages/Login/loginPage.jsx";
import { HomePage } from "./pages/homePage/homePage.jsx";
import { CAccountByUser } from "./pages/createAccount/cAccountByUser.jsx";
import { EditUser } from "./pages/editUser/editUser.jsx";

const routes = [
    { path: "/", element: <LandingPage />},
    { path: "/aboutUs", element: <LandingPageAboutUs />},
    { path: "/service", element: <LandingPageService />},
    { path: "/signIn", element: <LoginPage />},
    { path: "/home", element: <HomePage />},
    { path: "/cAccountByUser", element: <CAccountByUser />},
    { path: "/editUser", element: <EditUser />}
];

export default routes;