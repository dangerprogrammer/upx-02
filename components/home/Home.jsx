import { homeContainer } from './Home.module.scss';
import Sidebar from './sidebar/Sidebar';

function Home({ ...login }) {
    
    return <main className={homeContainer}>
        <Sidebar { ...login }/>
    </main>
};

export default Home;