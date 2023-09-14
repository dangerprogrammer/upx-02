import { useContext } from 'react';
import { activedCategorie } from './CategorieButton.module.scss';
import { ContextApp } from '../context/ContextApp';

function setCategorie({ id, classList }) {
    const { userCategories, setUserCategories } = useContext(ContextApp), cloneCategories = [...userCategories];
    const hasActived = classList.toggle(activedCategorie);

    console.log(cloneCategories);

    // if (hasActived) cloneCategories.push(id);
    // else cloneCategories.splice(cloneCategories.indexOf(id), 1);

    // console.log(userCategories);
    // setUserCategories(cloneCategories);
};

export default setCategorie;