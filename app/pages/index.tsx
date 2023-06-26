import { useEffect } from "react";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/hooks/useDispatch";
import { useAppSelector } from "@/hooks/useSelector";
import { setCinemas, setMovies } from "@/redux/films-page/filmsSlice";
import FilmsContent from "../src/components/filmsContent";
import styles from "./page.module.css";
import spinner from "../src/assets/images/spinner.png";

export default function Home() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state: RootState) => state.filmsPage.allMovies);
  const cinemas = useAppSelector((state: RootState) => state.filmsPage.cinemas);

  useEffect(() => {
    fetch("http://localhost:3001/api/movies").then(res => {
      let data = res.json();
      data.then((value) => {
        let movies = Object.values(value);
        dispatch(setMovies(movies));
      })
    });
    fetch("http://localhost:3001/api/cinemas").then(res => {
      let data = res.json();
      data.then((value) => {
        let cinemas = Object.values(value);
        dispatch(setCinemas(cinemas));
      })
    });
  }, [])

  if (movies.length === 0 || cinemas.length === 0) {
    return <div className={styles.spinner}>
      <Image src={spinner} width={200} height={200} alt="spinner" />
    </div>
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <FilmsContent />
      </div>
    </main>
  )
};
