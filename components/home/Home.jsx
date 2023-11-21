import { homeContainer, loadingContainer, loading } from './Home.module.scss';
import MainContent from './main-content/MainContent';
import Sidebar from './sidebar/Sidebar';

function Home({ login: {uniqueID, ...loginContexts}, userProducts, ...contexts }) {
    return uniqueID ? <main className={homeContainer}>
        <Sidebar {...{...contexts, ...loginContexts, uniqueID}}/>
        <MainContent { ...contexts }/>
    </main> : <span className={loadingContainer}>
        <div className={loading}>
            <span style={{'--ind': 0}}></span>
            <span style={{'--ind': 1}}></span>
            <span style={{'--ind': 2}}></span>
        </div>
        <p>Carregando...</p>
    </span>
};

export default Home;