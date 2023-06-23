import Link from 'next/link';
import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
        <Link href="/films"><div className={styles.logo}>Билетопоиск</div></Link>
        <Link href="/films/basket"><div className={styles.basket}></div></Link>
    </header>
  )
};
