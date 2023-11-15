import { mainContent, gridProducts } from './MainContent.module.scss';
import Footer from './footer/footer.jsx';
import Navbar from './navbar/Navbar.jsx';
import Product from './product/Product';

function MainContent({productsList}) {
    return <main className={mainContent}>
        <Navbar />
        <section className={gridProducts}>
            {productsList.map(({ ...context }) => <Product { ...context }/>)}
        </section>
        <Footer />
    </main>
};

export default MainContent;