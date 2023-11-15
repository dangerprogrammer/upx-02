import { mainContent } from './MainContent.module.scss';
import Footer from './footer/footer';
import Navbar from './navbar/Navbar';

function MainContent() {
    return <main className={mainContent}>
        <Navbar />
        <Footer />
    </main>
};

export default MainContent;