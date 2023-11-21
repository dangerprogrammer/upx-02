import { activedCategorie } from './CategorieButton.module.scss';

function setCategorie({ id, classList }, { setUserCategories, changeButton, force }) {
    setUserCategories(currentCateogires => {
        const cloneCategories = [...currentCateogires], hasActived = force || classList.toggle(activedCategorie);

        if (force) classList.add(activedCategorie);

        changeButton(hasActived);
        if (hasActived) {
            if (cloneCategories.indexOf(id) === -1) cloneCategories.push(id);
        } else {
            cloneCategories.splice(cloneCategories.indexOf(id), 1);
        };

        localStorage.setItem('user-categories', JSON.stringify(cloneCategories));
        return cloneCategories;
    });
};

export default setCategorie;