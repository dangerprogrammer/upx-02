import { productStyles, flexRow, imageStyles, localStyles, important, wrapLines, shadow, showHover } from './Product.module.scss';
import Image from "next/image";
import Home from '@/assets/svgs/home-outline.svg';

function Product({product: {name, Desc, price, photo}, user, local}) {
    return <li className={productStyles}>
        <div onClick={() => console.log("ver produto!")}>
            <Image alt='' src={photo} className={imageStyles}/>
            <Image alt='' src={photo} className={`${imageStyles} ${shadow}`}/>
            <span className={showHover}>Ver produto!</span>
        </div>
        <span className={flexRow}>
            <h2 className={wrapLines}>{name}</h2>
            <h2 className={important}>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</h2>
        </span>
        <h3>{user}</h3>
        <h4 className={localStyles}><Home/>{local}</h4>
        <p>
            <Desc className={wrapLines} style={{'--wrap': 3}}/>
        </p>
    </li>
};

export default Product;