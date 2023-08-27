import { sidebarContainer, headerContainer, mainContent } from './Sidebar.module.scss';

function Sidebar({ given_name }) {
    return <aside className={sidebarContainer}>
        <header className={headerContainer}>
        </header>
        <main className={mainContent}>
            <h1>Olá { given_name }! Aqui você pode escolher alguma categoria do seu interesse</h1>
        </main>
    </aside>
};

export default Sidebar;