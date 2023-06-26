'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/hooks/useDispatch";
import { useAppSelector } from "@/hooks/useSelector";
import { addTicket, decrement, increment, removeTicket } from "@/redux/basket-page/basketSlice";
import { genreCracker } from "../../utils/genreCracker";
import Comment from "./comment";
import Counter from "./counter";
import styles from "../styles/filmContent.module.css";
import noPhoto from "../assets/images/noPhoto.png";
import spinner from "../assets/images/spinner.png";
import { CommentType, MovieType } from "../../types";

interface FilmContentPropsTypes {
    id: string | undefined | string[];
};

export default function FilmContent(props: FilmContentPropsTypes) {
    const [movieData, setMovieData] = useState<MovieType>();
    const [comments, setComments] = useState<Array<CommentType>>();
    const dispatch = useAppDispatch();
    const ticketsCount = useAppSelector((state: RootState) => state.basketPage.ticketsCount);
    const basket = useAppSelector((state: RootState) => state.basketPage.basket);

    const posterLoader = () => {
        if (movieData) {
            return movieData.posterUrl;
        } else {
            return "";
        }
    };

    const determineTicketsCount = (id: string | string[] | undefined): number | undefined => {
        let tickets = basket.find(t => t.id === id)?.tickets;
        return tickets;
    };

    useEffect(() => {
        fetch(`http://localhost:3001/api/movie?movieId=${props.id}`).then((data) => data.json()).then((data) => {
            setMovieData(data);
        })
        fetch(`http://localhost:3001/api/reviews?movieId=${props.id}`).then((data) => data.json()).then((data) => {
            setComments(data);
        })
    }, [])

    const removeTicketsHandler = () => {
        const tickets = determineTicketsCount(props.id);
        if (tickets !== undefined) {
            if (tickets > 0) {
                dispatch(decrement());
                if (movieData) {
                    dispatch(removeTicket({
                        id: props.id,
                        name: movieData.title,
                        genre: movieData.genre,
                        poster: movieData.posterUrl,
                        tickets: 1
                    }));
                };
            };
        };
    };

    const addTicketsHandler = () => {
        let tickets = determineTicketsCount(props.id);
        if (tickets === undefined) {
            tickets = 0;
        };
        if (tickets < 30) {
            dispatch(increment());
            if (movieData) {
                dispatch(addTicket({
                    id: props.id,
                    name: movieData.title,
                    genre: movieData.genre,
                    poster: movieData.posterUrl,
                    tickets: 1
                }));
            };
        };
    };

    if (!movieData) {
        return <div className={styles.spinner}>
            <Image src={spinner} width={200} height={200} alt="spinner" />
        </div>
    }
    return (
        <div className={styles.filmContent}>
            <div className={styles.filmInfo}>
                <div className={styles.poster}>
                    <Image loader={posterLoader} src="poster.png" width={400} height={500} alt={`poster for film ${movieData.title}`} />
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>
                        <h1 className={styles.name}>{movieData.title}</h1>
                        <Counter ticketsCount={determineTicketsCount(props.id)}
                            removeTicketsHandler={removeTicketsHandler}
                            addTicketsHandler={addTicketsHandler} />
                    </div>
                    <div className={styles.genre}><b>Жанр:</b> {genreCracker(movieData.genre)}</div>
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
                {comments && comments.map((c: CommentType) => <Comment
                    key={c.id}
                    userPhoto={noPhoto}
                    userName={c.name}
                    userComment={c.text}
                    userRating={c.rating}
                />)}
            </div>
        </div>
    )
};
