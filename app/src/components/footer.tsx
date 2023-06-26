import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/films/QA"><div className={styles.qa}>Вопросы-ответы</div></Link>
      <Link href="/films/about"><div className={styles.aboutUs}>О нас</div></Link>
    </footer>
  )
};
