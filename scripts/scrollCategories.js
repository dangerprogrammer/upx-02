import { sidebarContainer, showCategories } from '../pages/home/sidebar/Sidebar.module.scss';

function scrollCategories(show = !1) {
    const sidebar = document.querySelector(`[class*="${sidebarContainer}"]`);
    
    sidebar.classList.toggle(showCategories, show);
};

export default scrollCategories;