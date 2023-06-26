import { RootState } from "@/redux/store";
import { useAppSelector } from "@/hooks/useSelector";
import { genreCracker } from "../../utils/genreCracker";
import { MovieType } from "../../types";
import Filter from "./filter";
import Preview from "./preview";
import styles from "../styles/filmsContent.module.css";

export default function FilmsContent() {
  const movies = useAppSelector((state: RootState) => state.filmsPage.allMovies);
  const nameFilter = useAppSelector((state: RootState) => state.filterPage.nameFilter);
  const genreFilter = useAppSelector((state: RootState) => state.filterPage.genreFilter);
  const cinemaFilter = useAppSelector((state: RootState) => state.filterPage.cinemaFilter);
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

  const filterMovies = movies
    .filter((m: MovieType) => {
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
    .filter((m: MovieType) => {
      const genre = genreCracker(m.genre);
      if (genreFilter === "Не выбрано" || genreFilter === "Выберите жанр") {
        return m;
      };
      if (genre === genreFilter) {
        return m;
      };
    })
    .filter((m: MovieType) => {
      if (cinemaFilter.name === "Не выбрано" || cinemaFilter.name === "Выберите кинотеатр") {
        return m;
      };
      if (cinemaFilter.movies.indexOf(m.id) > -1) {
        return m;
      };
    });

  return (
    <div className={styles.filmsContent}>
      <Filter />
      <div className={styles.content}>
        {filterMovies.length === 0 && <div className={styles.noResults}>Нет результатов...</div>}
        {filterMovies.map((movie: MovieType) => <Preview id={movie.id}
          ticketsCount={getTicketsCount(movie.id)}
          key={movie.id}
          filmName={movie.title}
          filmGenre={genreCracker(movie.genre)}
          imageSrc={movie.posterUrl}
          isTicket={false} />)}
      </div>
    </div>
  )
};
