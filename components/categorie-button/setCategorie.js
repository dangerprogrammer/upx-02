import { activedCategorie } from './CategorieButton.module.scss';

function setCategorie({ id, classList }, { userCategories, setUserCategories }) {
    const cloneCategories = [...userCategories];
    classList.toggle(activedCategorie);
    const hasActived = classList.contains(activedCategorie);
    console.log(hasActived);
    if (hasActived) {
        if (cloneCategories.indexOf(id) === -1) cloneCategories.push(id);
    } else /*do*/ cloneCategories.splice(cloneCategories.indexOf(id), 1);
    // while (cloneCategories.indexOf(id) !== -1);

    localStorage.setItem('user-categories', JSON.stringify(cloneCategories));
    setUserCategories(cloneCategories);
};

export default setCategorie;