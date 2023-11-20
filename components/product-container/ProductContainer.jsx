import Image from 'next/image';
import { responsiveShadow, resRevShadow, pageContainer, mainProduct, categorieName, photoStyles, shadow, greenColor, description, paymentMethod, grid, localStyles } from './ProductContainer.module.scss';
import BackPage from "@/components/back-page/BackPage";
import Home from '@/assets/svgs/home-outline.svg';
import realCash from '@/scripts/realCash';

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
                    <h1 className={greenColor}>{realCash(price)}</h1>
                    <p className={description}>
                        <Desc/>
                    </p>
                </span>
                <BackPage shadow addClass={` ${responsiveShadow}`}/>
            </main>
            <aside>
                <section className={paymentMethod}>
                    <p>Selecione a forma de pagamento</p>
                    <div className={grid}>
                        <input type="radio" name="payment-method" id="debit" defaultChecked/>
                        <label htmlFor="debit">Cartão</label>
                        <input type="radio" name="payment-method" id="cash"/>
                        <label htmlFor="cash">Dinheiro</label>
                    </div>
                </section>
                <button>Comprar Agora</button>
                <p>
                    <span>{user}</span>
                    <h4 className={localStyles}><Home/>{local}</h4>
                </p>
            </aside>
        </main>
        {/* <BackPage shadow addClass={` ${resRevShadow}`}/> */}
        <BackPage/>
    </div>
};

export default ProductContainer;