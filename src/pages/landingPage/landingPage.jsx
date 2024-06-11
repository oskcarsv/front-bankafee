import { Nav } from '../../components/Navbar.jsx';
import { Footer } from '../../components/Footer.jsx';
import { Pr1 } from '../../components/landingPages/Pr1.jsx';

import './landingPage.css'


export const LandingPage = () => {
    return (
        <main className='content-landing'>
            <Nav />
            <Pr1/>
            <Footer/>
        </main>
    )
};