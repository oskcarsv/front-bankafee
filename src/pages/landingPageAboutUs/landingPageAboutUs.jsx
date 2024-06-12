import { Nav } from "../../components/Navbar";
import { SectionMessage } from "../../components/aboutUs/SectionMessage";
import { SectionMessageTwo } from "../../components/aboutUs/SectionMessageTwo";
import { Footer } from "../../components/Footer";

import './landingPageAboutUs.css';

export const LandingPageAboutUs = () => {
    return (
        <main className="content-about">
            <Nav/>
            <SectionMessage/>
            <SectionMessageTwo/>
            <Footer/>
        </main>
    )
};