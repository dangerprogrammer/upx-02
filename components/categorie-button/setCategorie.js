import { activedCategorie } from './CategorieButton.module.scss';

function setCategorie({ id, classList }, { userCategories, setUserCategories }) {
    const cloneCategories = [...userCategories], hasActived = classList.toggle(activedCategorie);

    if (hasActived) {
        if (cloneCategories.indexOf(id) === -1) {
            cloneCategories.push(id);
            classList.add(activedCategorie);
        };
    } else {
        cloneCategories.splice(cloneCategories.indexOf(id), 1);
        classList.remove(activedCategorie);
    };

    localStorage.setItem('user-categories', JSON.stringify(cloneCategories));
    setUserCategories(cloneCategories);
    
    classList[cloneCategories.indexOf(id) === -1 ? 'add' : 'remove'](activedCategorie);
};

export default setCategorie;