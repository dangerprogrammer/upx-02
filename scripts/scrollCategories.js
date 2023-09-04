import { sidebarContainer, showCategories } from '../components/home/sidebar/Sidebar.module.scss';

function scrollCategories(show = !1) {
    const sidebar = document.querySelector(`[class*="${sidebarContainer}"]`);

    console.log(show);
    
    sidebar.classList.toggle(showCategories, !show);
};

export default scrollCategories;