import { useAppSelector } from '@/hooks/useSelector';
import { RootState } from '@/redux/store';
import { Movie } from '../../../types';
import styles from './styles.module.css';
import Filter from './filter';
import Preview from './preview';
import Link from 'next/link';

export default function FilmsContent() {
  const movies = useAppSelector((state: RootState) => state.filmsPage.allMovies);
  const nameFilter = useAppSelector((state: RootState) => state.filterPage.nameFilter);
  const tickets = useAppSelector((state: RootState) => state.basketPage.basket);

  const getTicketsCount = (id: string) => {
    if (tickets.length) {
      let ticket = tickets.filter(t => t.id === id);
      if (ticket.length) {
        return ticket[0].tickets;
      } else {
        return 0;
      };
    };
    return 0;
  };

  return (
    <div className={styles.filmsContent}>
      <Filter />
      <div className={styles.content}>
        {movies
          .filter((m: Movie) => {
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
          .map((movie: Movie) => <Preview id={movie.id}
            ticketsCount={getTicketsCount(movie.id)}
            key={movie.id}
            filmName={movie.title}
            filmGenre={movie.genre}
            imageSrc={movie.posterUrl}
            isTicket={false} />)}
      </div>
    </div>
  )
};
