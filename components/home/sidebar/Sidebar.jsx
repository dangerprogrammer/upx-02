import { sidebarContainer, headerContainer, mainContent, skipButton, arrow, footerContainer, lowerButton } from './Sidebar.module.scss';
import ArrowForward from '@/assets/svgs/arrow-forward-outline.svg';

function Sidebar({ given_name }) {
    return <aside className={sidebarContainer}>
        <header className={headerContainer}>
            <h1>Selecione as categorias de seu interesse</h1>
        </header>
        <main className={mainContent}>
        </main>
        <footer className={footerContainer}>
            <button className={`${skipButton} ${lowerButton}`}>Pular<ArrowForward className={arrow}/></button>
            <button className={skipButton}>Continuar<ArrowForward className={arrow}/></button>
        </footer>
    </aside>
};

export default Sidebar;