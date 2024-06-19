import { LandingPage } from "./pages/landingPage/landingPage.jsx";
import { LandingPageAboutUs } from "./pages/landingPageAboutUs/landingPageAboutUs.jsx";
import { LandingPageService } from "./pages/landingPageService/landingPageService.jsx";
import { LoginPage } from "./pages/Login/loginPage.jsx";
import { HomePage } from "./pages/homePage/homePage.jsx";

const routes = [
    { path: "/", element: <LandingPage />},
    { path: "/aboutUs", element: <LandingPageAboutUs />},
    { path: "/service", element: <LandingPageService />},
    { path: "/signIn", element: <LoginPage />},
    {  path: "/home", element: <HomePage />},
];

export default routes;