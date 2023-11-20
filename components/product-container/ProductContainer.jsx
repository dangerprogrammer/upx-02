import Image from 'next/image';
import { pageContainer, mainProduct, categorieName, photoStyles, shadow, greenColor, description, paymentMethod, grid, localStyles } from './ProductContainer.module.scss';
import BackPage from "@/components/back-page/BackPage";
import Home from '@/assets/svgs/home-outline.svg';

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
                        <input type="radio" name="payment-method" id="debit"/>
                        <label htmlFor="debit">Cartão</label>
                        <input type="radio" name="payment-method" id="cash"/>
                        <label htmlFor="cash">Dinheiro</label>
                    </div>
                </section>
                <p>
                    <span>{user}</span>
                    <h4 className={localStyles}><Home/>{local}</h4>
                </p>
            </aside>
        </main>
        <BackPage shadow/>
        <BackPage/>
    </div>
};

export default ProductContainer;