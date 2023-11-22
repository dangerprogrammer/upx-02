import LoadingContainer from '../../components/loading-container/LoadingContainer';
import { homeContainer } from './Home.module.scss';
import MainContent from './main-content/MainContent';
import Sidebar from './sidebar/Sidebar';

function Home({ login, login: {uniqueID, ...loginContexts}, userProducts, ...contexts }) {
    return console.log(uniqueID ?? login);
    return uniqueID ? <main className={homeContainer}>
        <Sidebar {...{...contexts, ...loginContexts, uniqueID}}/>
        <MainContent { ...contexts }/>
    </main> : <LoadingContainer/>
};

export default Home;