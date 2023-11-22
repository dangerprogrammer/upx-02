import LoadingContainer from '../../components/loading-container/LoadingContainer';
import { homeContainer } from './Home.module.scss';
import MainContent from './main-content/MainContent';
import Sidebar from './sidebar/Sidebar';

function Home({ login, login: {uniqueID}, userProducts, ...contexts }) {
    return uniqueID ? <main className={homeContainer}>
        <Sidebar {...{...contexts, ...login}}/>
        <MainContent { ...contexts }/>
    </main> : <LoadingContainer/>
};

export default Home;