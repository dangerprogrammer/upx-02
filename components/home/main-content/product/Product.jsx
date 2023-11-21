import { cart, productStyles, imageStyles, localStyles, wrapLines, shadow, showHover, categorieName, greenColor, removeCartStyles, restoreCart } from './Product.module.scss';
import Image from "next/image";
import Home from '@/assets/svgs/home-outline.svg';
import Cart from '@/assets/svgs/cart-outline.svg';
import Trash from '@/assets/svgs/trash-outline.svg';
import { useRouter } from 'next/navigation';
import realCash from '@/scripts/realCash';
import { useState } from 'react';

function Product({systemCategories, categorie, product: {name, Desc, price, photo, id}, local, removeCart}) {
    const { push } = useRouter(), productCategorie = systemCategories.find(({ id }) => id == categorie),
        [inCart, setInCart] = useState(!0);

    return <li className={productStyles}>
        <div onClick={() => push(`/${id}`)}>
            <Image alt='' src={photo} className={imageStyles}/>
            <Image alt='' src={photo} className={`${imageStyles} ${shadow}`}/>
            <span className={showHover}>Ver produto!</span>
        </div>
        <div className={categorieName}>
            <span>{productCategorie.name}</span>
        </div>
        <h3 className={wrapLines}>{name}</h3>
        <h2 className={greenColor}>{realCash(price)}</h2>
        <h4 className={localStyles}><Home/>{local}</h4>
        <p>
            <Desc className={wrapLines} style={{'--wrap': 3}}/>
        </p>
        {removeCart ? <button className={`${cart} ${inCart ? removeCartStyles : restoreCart}`} onClick={() => (removeCart(inCart), setInCart(cart => !cart))}>{inCart ? <>Remover do carrinho<Trash/></> : <>Restaurar<Cart/></>}</button> : null}
    </li>
};

export default Product;