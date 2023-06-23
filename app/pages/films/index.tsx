import FilmsContent from '../../src/components/filmsContent';
import Footer from '@/components/footer';
import Header from '@/components/header';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Header />
        <FilmsContent />
        <Footer />
      </div>
    </main>
  )
};
