import { LandingPage } from "./pages/landingPage/landingPage.jsx";
import { LandingPageAboutUs } from "./pages/landingPageAboutUs/landingPageAboutUs.jsx";
import { LandingPageService } from "./pages/landingPageService/landingPageService.jsx";
import { RequestAccount } from "./pages/requestAccount/requestAccount.jsx";
import { LoginPage } from "./pages/Login/loginPage.jsx";
import { HomePage } from "./pages/homePage/homePage.jsx";
import { CAccountByUser } from "./pages/createAccount/cAccountByUser.jsx";
import { EditUser } from "./pages/editUser/editUser.jsx";
import { TransferUser } from "./pages/transferUser/transferUser.jsx";
import { HistoryUser } from "./pages/historyUser/historyUser.jsx";
import { DepositPage } from "./pages/deposit/depositPage.jsx";
import { CreateUser } from "./pages/createUser/createUser.jsx";
import { ProductHomePage } from "./pages/productHomePage/productHomePage.jsx";
import { ProductCategory } from "./pages/productCategory/productCategory.jsx";
import { PurchaseForm } from "./pages/purchaseForm/purchaseForm.jsx";

const routes = [
    { path: "/", element: <LandingPage /> },
    { path: "/aboutUs", element: <LandingPageAboutUs /> },
    { path: "/service", element: <LandingPageService /> },
    { path: "/requestAccount", element: <RequestAccount /> },
    { path: "/signIn", element: <LoginPage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/cAccountByUser", element: <CAccountByUser /> },
    { path: "/editUser", element: <EditUser /> },
    { path: "/transferUser", element: <TransferUser /> },
    { path: "/history", element: <HistoryUser /> },
    { path: "/deposit", element: <DepositPage /> },
    { path: "/createUser", element: <CreateUser /> },
    { path: "/productHomePage", element: <ProductHomePage /> },
    { path: "/productCategory", element: <ProductCategory /> },
    { path: "/purchaseForm", element: <PurchaseForm />}
];

export default routes;