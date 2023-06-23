import Filter from './filter';
import Preview from './preview';
import styles from './styles.module.css';
import frodo from "../../assets/images/frodo.png"
import { useAppSelector } from '@/hooks/useSelector';
import { RootState } from '@/redux/store';
import { useState } from 'react';

export default function FilmsContent() {
  const movies = useAppSelector((state: RootState) => state.filmsPage.allMovies);
  const nameFilter = useAppSelector((state: RootState) => state.filterPage.nameFilter)

  return (
    <div className={styles.filmsContent}>
      <Filter />
      <div className={styles.content}>
        {movies
          .filter((m) => {
            if (nameFilter === "") {
              return m;
            };
            if (nameFilter.includes("\\")) {
              return false;
            };
            const regExp = new RegExp("^" + nameFilter.toLowerCase());
            const hasSubstr = m.title.toLowerCase().match(regExp);
            return hasSubstr;
          })
          .map(movie => <Preview key={movie.id} filmName={movie.title} filmGenre={movie.genre} imageSrc={movie.posterUrl} isTicket={false} />)}
      </div>
    </div>
  )
};
