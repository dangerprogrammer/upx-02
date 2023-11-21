import LoadingContainer from '../../loading-container/LoadingContainer';
import { homeContainer } from './Home.module.scss';
import MainContent from './main-content/MainContent';
import Sidebar from './sidebar/Sidebar';

function Home({ login: {uniqueID, ...loginContexts}, userProducts, ...contexts }) {
    return uniqueID ? <main className={homeContainer}>
        <Sidebar {...{...contexts, ...loginContexts, uniqueID}}/>
        <MainContent { ...contexts }/>
    </main> : <LoadingContainer/>
};

export default Home;