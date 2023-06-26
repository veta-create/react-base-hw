import { useRouter } from "next/router";
import FilmContent from "../../src/components/filmContent";
import styles from "../page.module.css";

export default function FilmPage() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <FilmContent id={id} />
      </div>
    </main>
  )
};
