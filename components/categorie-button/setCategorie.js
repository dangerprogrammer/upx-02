import { activedCategorie } from './CategorieButton.module.scss';

function setCategorie({ id, classList }, { userCategories, setUserCategories }) {
    const cloneCategories = [...userCategories], hasActived = classList.toggle(activedCategorie);

    if (hasActived) {
        if (cloneCategories.indexOf(id) === -1) cloneCategories.push(id);
    } else /*do*/ cloneCategories.splice(cloneCategories.indexOf(id), 1);
    // while (cloneCategories.indexOf(id) !== -1);

    localStorage.setItem('user-categories', JSON.stringify(cloneCategories));
    setUserCategories(cloneCategories);
};

export default setCategorie;