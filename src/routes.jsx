import { LandingPage } from "./pages/landingPage/landingPage.jsx";
import { LandingPageAboutUs } from "./pages/landingPageAboutUs/landingPageAboutUs.jsx";
import { LandingPageService } from "./pages/landingPageService/landingPageService.jsx";
import { LoginPage } from "./pages/Login/loginPage.jsx";

const routes = [
    { path: "/", element: <LandingPage />},
    { path: "/aboutUs", element: <LandingPageAboutUs />},
    { path: "/service", element: <LandingPageService />},
    { path: "/login", element: <LoginPage />}
];

export default routes;