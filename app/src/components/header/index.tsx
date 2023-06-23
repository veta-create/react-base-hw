import Link from 'next/link';
import styles from './styles.module.css';
import { useAppSelector } from '@/hooks/useSelector';
import { RootState } from '@/redux/store';

export default function Header() {
  const ticketsCount = useAppSelector((state: RootState) => state.basketPage.ticketsCount);
  return (
    <header className={styles.header}>
      <Link href="/films"><div className={styles.logo}>Билетопоиск</div></Link>
      <div className={styles.tickets}>
        {ticketsCount > 0 && <div className={styles.count}><div>{ticketsCount}</div></div>}
        <Link href="/films/basket"><div className={styles.basket}></div></Link>
      </div>
    </header>
  )
};
