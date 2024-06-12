import { LandingPage } from "./pages/landingPage/landingPage.jsx";
import { LandingPageAboutUs } from "./pages/landingPageAboutUs/landingPageAboutUs.jsx";

const routes = [
    { path: "/", element: <LandingPage />},
    { path: "/aboutUs", element: <LandingPageAboutUs />}
];

export default routes;