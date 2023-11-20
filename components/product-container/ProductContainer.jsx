import Image from 'next/image';
import { pageContainer, mainProduct, categorieName, photoStyles, shadow, greenColor, description } from './ProductContainer.module.scss';
import BackPage from "@/components/back-page/BackPage";


function ProductContainer({systemCategories, categorie, product: {name, Desc, price, photo, id}, local}) {
    const productCategorie = systemCategories.find(({ id }) => id == categorie);

    return <div className={pageContainer}>
        <main className={mainProduct}>
            <h1>{name}</h1>
            <div className={categorieName}>
                <span>{productCategorie.name}</span>
            </div>
            <div>
                <Image alt='Photo from product' src={photo} className={photoStyles}/>
                <Image alt='Photo from product' src={photo} className={`${photoStyles} ${shadow}`}/>
            </div>
            <h1 className={greenColor}>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</h1>
            <p className={description}>
                <Desc/>
            </p>
            <BackPage shadow/>
        </main>
        <aside>Comprar</aside>
        <BackPage/>
    </div>
};

export default ProductContainer;