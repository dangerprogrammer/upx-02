import { productStyles, flexRow, imageStyles } from './Product.module.scss';
import Image from "next/image";

function Product({product: {name, desc, price, photo}, user, local}) {
    return <li className={productStyles}>
        <Image alt='' src={photo} className={imageStyles}/>
        <span className={flexRow}>
            <h2>{name}</h2>
            <h2>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</h2>
        </span>
        <h3>{user}</h3>
        <h4>{local}</h4>
        <p>{desc}</p>
    </li>
};

export default Product;