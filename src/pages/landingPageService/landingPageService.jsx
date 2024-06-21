import { Nav } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { ServiceContent } from "../../components/service/ServiceContent";
import { Footer } from "../../components/Footer";

export const LandingPageService = () => {
  return (
    <main>
      <Nav />
      <Header />
      <ServiceContent />
      <Footer />
    </main>
  );
};
