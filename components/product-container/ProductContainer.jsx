import Image from 'next/image';
import { pageContainer, mainProduct, categorieName } from './ProductContainer.module.scss';
import BackPage from "@/components/back-page/BackPage";


function ProductContainer({systemCategories, categorie, product: {name, Desc, price, photo, id}, local}) {
    const productCategorie = systemCategories.find(({ id }) => id == categorie);

    return <div className={pageContainer}>
        <main className={mainProduct}>
            <h1>{name}</h1>
            <Image alt='Photo from product' src={photo}/>
            <div className={categorieName}>
                <span>{productCategorie.name}</span>
            </div>
        </main>
        <aside>Comprar</aside>
        <BackPage/>
    </div>
};

export default ProductContainer;