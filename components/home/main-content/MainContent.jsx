import { mainContent } from './MainContent.module.scss';
import Navbar from './navbar/Navbar';

function MainContent() {
    return <main className={mainContent}>
        <Navbar />
    </main>
};

export default MainContent;