import { useContext } from 'react';
import { activedCategorie } from './CategorieButton.module.scss';
import { ContextApp } from '../context/ContextApp';

function setCategorie({ id, classList }, { userCategories, setUserCategories }) {
    const { userCategories, setUserCategories } = useContext(ContextApp), cloneCategories = [...userCategories],
        hasActived = classList.toggle(activedCategorie);

    if (hasActived) cloneCategories.push(id);
    else cloneCategories.splice(cloneCategories.indexOf(id), 1);

    console.log(cloneCategories);
    // setUserCategories(cloneCategories);
};

export default setCategorie;