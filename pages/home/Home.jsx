import LoadingContainer from '../../components/loading-container/LoadingContainer';
import { homeContainer } from './Home.module.scss';
import MainContent from './main-content/MainContent';
import Sidebar from './sidebar/Sidebar';

function Home({ userProducts, ...contexts }) {
    console.log(contexts);
    return <main className={homeContainer}>
        <Sidebar {...{...contexts}}/>
        <MainContent { ...contexts }/>
    </main>
};

export default Home;