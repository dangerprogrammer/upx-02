import { productStyles, imageStyles, localStyles, important, wrapLines, shadow, showHover, categorieName, greenColor } from './Product.module.scss';
import Image from "next/image";
import Home from '@/assets/svgs/home-outline.svg';
import { useRouter } from 'next/navigation';

function Product({systemCategories, categorie, product: {name, Desc, price, photo, id}, local}) {
    const router = useRouter();

    return <li className={productStyles}>
        <div onClick={() => router.push(`/${id}`)}>
            <Image alt='' src={photo} className={imageStyles}/>
            <Image alt='' src={photo} className={`${imageStyles} ${shadow}`}/>
            <span className={showHover}>Ver produto!</span>
        </div>
        <div className={categorieName}>
            <span>{systemCategories.find(({ id }) => id == categorie).name}</span>
        </div>
        <h3 className={wrapLines}>{name}</h3>
        <h2 className={`${important} ${greenColor}`}>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</h2>
        <h4 className={localStyles}><Home/>{local}</h4>
        <p>
            <Desc className={wrapLines} style={{'--wrap': 3}}/>
        </p>
    </li>
};

export default Product;