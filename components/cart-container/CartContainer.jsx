import BackPage from '../back-page/BackPage';
import { cartContainer } from './CartContainer.module.scss';

function CartContainer({ userCart }) {
    console.log(userCart);

    return <main className={cartContainer}>
        <h1>Opa!</h1>
        <BackPage/>
    </main>
};

export default CartContainer;