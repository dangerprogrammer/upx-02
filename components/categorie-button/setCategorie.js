import { useContext } from 'react';
import { activedCategorie } from './CategorieButton.module.scss';
import { ContextApp } from '../context/ContextApp';

function setCategorie({ id }) {
    const { userCategories, setUserCategories } = useContext(ContextApp);
    const hasActived = elem.classList.toggle(activedCategorie);

    setUserCategories(() => {
        if (hasActived) userCategories.push(id);
        else userCategories.splice(userCategories.indexOf(id), 1);

        return userCategories;
    });

    console.log(userCategories);
};

export default setCategorie;