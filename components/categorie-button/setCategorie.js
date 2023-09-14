import { activedCategorie } from './CategorieButton.module.scss';

function setCategorie(elem) {
    elem.classList.toggle(activedCategorie);
};

export default setCategorie;