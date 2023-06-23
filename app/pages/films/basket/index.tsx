import Basket from "../../../src/components/basket/index";
import styles from '../page.module.css';

export default function BasketPage() {
    return (
        <main className={styles.main}>
            <Basket ticketsCount="7" />
        </main>
    )
};