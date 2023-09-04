import { sidebarContainer, headerContainer, mainContent, skipButton, arrow } from './Sidebar.module.scss';
import ArrowForward from '@/assets/svgs/arrow-forward-outline.svg';

function Sidebar({ given_name }) {
    return <aside className={sidebarContainer}>
        <header className={headerContainer}>
            <h1>Selecione as categorias de seu interesse</h1>
            <button className={skipButton}>Pular<ArrowForward className={arrow}/></button>
        </header>
        <main className={mainContent}>
        </main>
    </aside>
};

export default Sidebar;