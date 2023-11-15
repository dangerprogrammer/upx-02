import { productStyles } from './Product.module.scss';

function Product({categorie, product: {name, desc, price}, user, local}) {
    return <li className={productStyles}>Produto!</li>
};

export default Product;