import { productStyles, flexRow } from './Product.module.scss';

function Product({categorie, product: {name, desc, price}, user, local}) {
    return <li className={productStyles}>
        <span className={flexRow}>
            <h2>{name}</h2>
            <strong>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</strong>
        </span>
        <h3>{user}</h3>
        <h4>{local}</h4>
        <p>{desc}</p>
    </li>
};

export default Product;