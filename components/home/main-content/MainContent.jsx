import { mainContent } from './MainContent.module.scss';
import Footer from './footer/footer.jsx';
import Navbar from './navbar/Navbar.jsx';

function MainContent() {
    return <main className={mainContent}>
        <Navbar />
        <Footer />
    </main>
};

export default MainContent;