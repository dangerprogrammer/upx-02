import { useContext } from 'react';
import { activedCategorie } from './CategorieButton.module.scss';
import { ContextApp } from '../context/ContextApp';

function setCategorie({ id }) {
    const { userCategories, setUserCategories } = useContext(ContextApp);
    const hasActived = elem.classList.toggle(activedCategorie);

    if (hasActived) userCategories.push(id);
    else userCategories.splice(userCategories.indexOf(id), 1);

    console.log(userCategories);
    setUserCategories(userCategories);
};

export default setCategorie;