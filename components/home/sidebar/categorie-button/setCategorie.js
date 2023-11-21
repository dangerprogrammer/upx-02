import { activedCategorie } from './CategorieButton.module.scss';

function setCategorie({ id, classList }, { setUserCategories, force }) {
    setUserCategories(currentCateogires => {
        const cloneCategories = [...currentCateogires], hasActived = classList[force ? 'add' : 'toggle'](activedCategorie);

        if (hasActived) {
            if (cloneCategories.indexOf(id) === -1) cloneCategories.push(id);
        } else cloneCategories.splice(cloneCategories.indexOf(id), 1);

        localStorage.setItem('user-categories', JSON.stringify(cloneCategories));
        return cloneCategories;
    });
};

export default setCategorie;