import { Nav } from '../../components/Navbar.jsx';
import { Footer } from '../../components/Footer.jsx';
import { SectionWelcome } from '../../components/landingPages/SectionWelcome.jsx';
import { SectionTool } from '../../components/landingPages/SectionTool.jsx';
import { SectionTransfer } from '../../components/landingPages/SectionTransfer.jsx';
import { SectionProduct } from '../../components/landingPages/SectionProduct.jsx';

import './landingPage.css'


export const LandingPage = () => {
    return (
        <main className='content-landing'>
            <Nav />
            <SectionWelcome />
            <SectionTool />
            <SectionTransfer />
            <SectionProduct />
            <Footer/>
        </main>
    )
};