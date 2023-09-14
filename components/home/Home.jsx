import { homeContainer } from './Home.module.scss';
import Sidebar from './sidebar/Sidebar';

function Home({ userCategories, setUserCategories, ...login }) {
    console.log(userCategories);

    return <main className={homeContainer}>
        <Sidebar { ...login }/>
    </main>
};

export default Home;