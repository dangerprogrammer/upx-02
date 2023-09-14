import { activedCategorie } from './CategorieButton.module.scss';

function setCategorie({ id, classList }, { userCategories, setUserCategories }) {
    const cloneCategories = [...userCategories],
        hasActived = classList.toggle(activedCategorie);

    if (hasActived) cloneCategories.push(id);
    else cloneCategories.splice(cloneCategories.indexOf(id), 1);

    console.log(cloneCategories);
    setUserCategories(cloneCategories);
};

export default setCategorie;