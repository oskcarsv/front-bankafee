import { Nav } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { AboutUsContent } from "../../components/aboutUs/AboutUsContent";
import { Footer } from "../../components/Footer";

import "./landingPageAboutUs.css";

export const LandingPageAboutUs = () => {
  return (
    <main className="content-about">
      <Nav />
      <Header />
      <AboutUsContent />
      <Footer />
    </main>
  );
};
