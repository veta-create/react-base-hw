import { RootState } from "@/redux/store";
import { useAppSelector } from "@/hooks/useSelector";
import { genreCracker } from "../../utils/genreCracker";
import { Movie } from "../../types";
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
          .filter((m: Movie) => {
            const genre = genreCracker(m.genre);
            // console.log(genreFilter)
            if (genreFilter === "Не выбрано" || genreFilter === "Выберите жанр") {
              return m;
            };
            if (genre === genreFilter) {
              return m;
            };
          })
          .filter((m: Movie) => {
            if (cinemaFilter.name === "Не выбрано" || cinemaFilter.name === "Выберите кинотеатр") {
              return m;
            };
            if (cinemaFilter.movies.indexOf(m.id) > -1) {
              return m;
            };
          })
          .map((movie: Movie) => <Preview id={movie.id}
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
