import { homeContainer } from './Home.module.scss';
import Sidebar from './sidebar/Sidebar';

function Home({ userCategories, setUserCategories, ...login }) {
    
    return <main className={homeContainer}>
        <Sidebar { ...login } userCategories={userCategories} setUserCategories={setUserCategories}/>
    </main>
};

export default Home;