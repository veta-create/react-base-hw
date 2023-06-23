import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import Comment from './comment';
import noPhoto from "../../assets/images/noPhoto.png";
import spinner from "../../assets/images/spinner.png";

export default function FilmContent(props) {
    const [movieData, setMovieData] = useState(0);
    const [comments, setComments] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/api/movie?movieId=${props.id}`).then((data) => data.json()).then((data) => {
            setMovieData(data);
        })
        fetch(`http://localhost:3001/api/reviews?movieId=${props.id}`).then((data) => data.json()).then((data) => {
            setComments(data);
        })
    }, [])

    if (movieData === 0) {
        return <div className={styles.spinner}>
            <Image src={spinner} width={200} height={200} alt="spinner" />
        </div>
    }
    return (
        <div className={styles.filmContent}>
            <div className={styles.filmInfo}>
                <div className={styles.poster}>
                    <img src={movieData.posterUrl}
                        width="400px"
                        height="500px"
                        alt={`poster for film ${movieData.title}`} />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.name}>{movieData.title}</h1>
                    <div className={styles.genre}><b>Жанр:</b> {movieData.genre}</div>
                    <div className={styles.year}><b>Год выпуска:</b> {movieData.releaseYear}</div>
                    <div className={styles.rating}><b>Рейтинг:</b> {movieData.rating}</div>
                    <div className={styles.producer}><b>Режиссер:</b> {movieData.director}</div>
                    <div className={styles.description}>
                        <div><b>Описание</b></div>
                        <div className={styles.text}>{movieData.description}</div>
                    </div>
                </div>
            </div>
            <div className={styles.comments}>
                {comments?.map(c => <Comment
                    userPhoto={noPhoto}
                    userName={c.name}
                    userComment={c.text}
                    userRating={c.rating}
                />)}
            </div>
        </div>
    )
};
