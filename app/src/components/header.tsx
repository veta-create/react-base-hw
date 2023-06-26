import Link from "next/link";
import { RootState } from "@/redux/store";
import { useAppSelector } from "@/hooks/useSelector";
import styles from "../styles/header.module.css";

export default function Header() {
  const ticketsCount = useAppSelector((state: RootState) => state.basketPage.ticketsCount);
  return (
    <header className={styles.header}>
      <Link href="/"><div className={styles.logo}>Билетопоиск</div></Link>
      <div className={styles.tickets}>
        {ticketsCount > 0 && <div className={styles.count}><div>{ticketsCount}</div></div>}
        <Link href="/basket"><div className={styles.basket}></div></Link>
      </div>
    </header>
  )
};
