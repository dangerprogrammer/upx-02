import { homeContainer } from './Home.module.scss';
import MainContent from './main-content/MainContent';
import Sidebar from './sidebar/Sidebar';

function Home({ userCategories, setUserCategories, ...contexts }) {
    return <main className={homeContainer}>
        <Sidebar { ...contexts } userCategories={userCategories} setUserCategories={setUserCategories}/>
        <MainContent />
    </main>
};

export default Home;