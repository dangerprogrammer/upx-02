import { activedCategorie } from './CategorieButton.module.scss';

function setCategorie({ id, classList }, { userCategories, setUserCategories }) {
    const cloneCategories = [...userCategories], hasActived = classList[classList.contains(activedCategorie) ? 'remove' : 'add'](activedCategorie);

    console.log(hasActived);
    if (hasActived) {
        if (cloneCategories.indexOf(id) === -1) cloneCategories.push(id);
    } else cloneCategories.splice(cloneCategories.indexOf(id), 1);

    localStorage.setItem('user-categories', JSON.stringify(cloneCategories));
    setUserCategories(cloneCategories);
};

export default setCategorie;