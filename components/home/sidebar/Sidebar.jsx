import { sidebarContainer, headerContainer } from './Sidebar.module.scss';

function Sidebar({ given_name }) {
    return <aside className={sidebarContainer}>
        <header className={headerContainer}>
            <h1>Olá { given_name }! Aqui você pode escolher alguma categoria do seu interesse</h1>
        </header>
    </aside>
};

export default Sidebar;