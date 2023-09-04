import { categorieButton } from './CategorieButton.module.scss';

function CategorieButton({ name, imagePath, id }) {
    return <li className={categorieButton} id={id}>{name}</li>
};

export default CategorieButton;