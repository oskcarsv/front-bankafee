import { BrowserRouter } from "react-router-dom";
import ReactDom from "react-dom/client";
import { App } from "./App.jsx";
import './index.css';
import {Nav} from './components/nav.jsx';


ReactDom.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
        <Nav />
    </BrowserRouter>
);