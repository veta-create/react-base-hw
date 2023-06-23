import Footer from '../../../src/components/footer';
import Header from '../../../src/components/header';
import Basket from "../../../src/components/basket/index";
import styles from '../page.module.css';

export default function BasketPage() {
    return (
        <main className={styles.main}>
            <Header />
            <Basket ticketsCount="7" />
            <Footer />
        </main>
    )
};