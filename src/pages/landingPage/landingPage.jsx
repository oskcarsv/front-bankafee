import { Nav } from '../../components/Navbar.jsx';
import { Footer } from '../../components/Footer.jsx';
import { SectionWelcome } from '../../components/landingPages/SectionWelcome.jsx';
import { SectionTool } from '../../components/landingPages/SectionTool.jsx';

import './landingPage.css'


export const LandingPage = () => {
    return (
        <main className='content-landing'>
            <Nav />
            <SectionWelcome />
            <SectionTool />
            <Footer/>
        </main>
    )
};