import Image from 'next/image';
import { pageContainer, mainProduct, categorieName, photoStyles, shadow, greenColor, description, paymentMethod, grid } from './ProductContainer.module.scss';
import BackPage from "@/components/back-page/BackPage";


function ProductContainer({systemCategories, categorie, product: {name, Desc, price, photo}, user, local}) {
    const productCategorie = systemCategories.find(({ id }) => id == categorie);

    return <div className={pageContainer}>
        <main>
            <main className={mainProduct}>
                <span>
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
                </span>
            </main>
            <aside>
                <section className={paymentMethod}>
                    <p>Selecione a forma de pagamento</p>
                    <div className={grid}>
                        <span>Cartão</span>
                        <span>Dinheiro</span>
                    </div>
                </section>
            </aside>
        </main>
        <BackPage shadow/>
        <BackPage/>
    </div>
};

export default ProductContainer;