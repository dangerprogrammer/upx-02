import LoadingContainer from '../../components/loading-container/LoadingContainer';
import { homeContainer } from './Home.module.scss';
import MainContent from './main-content/MainContent';
import Sidebar from './sidebar/Sidebar';

function Home({ login: {...loginContexts}, userProducts, ...contexts }) {
    return <main className={homeContainer}>
        <Sidebar {...{...contexts, ...loginContexts, uniqueID}}/>
        <MainContent { ...contexts }/>
    </main>
};

export default Home;