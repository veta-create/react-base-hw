import { useAppSelector } from "@/hooks/useSelector";
import Basket from "../../../src/components/basket/index";
import styles from '../page.module.css';
import { RootState } from "@/redux/store";

export default function BasketPage() {
    const ticketsCount = useAppSelector((state: RootState) => state.basketPage.ticketsCount);

    return (
        <main className={styles.main}>
            <Basket />
        </main>
    )
};