import { useEffect } from 'react';
import FilmsContent from '../../src/components/filmsContent';
import styles from './page.module.css';
import { useAppDispatch } from '@/hooks/useDispatch';
import { useAppSelector } from '@/hooks/useSelector';
import store, { RootState } from '@/redux/store';
import { setMovies } from '@/redux/films-page/filmsSlice';

export default function Home() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state: RootState) => state.filmsPage.allMovies)

  useEffect(() => {
    fetch("http://localhost:3001/api/movies").then(res => {
      let data = res.json();
      data.then((value) => {
        let movies = Object.values(value);
        console.log(movies)
        dispatch(setMovies(movies));
      })
    });
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <FilmsContent />
      </div>
    </main>
  )
};
