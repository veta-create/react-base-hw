'use client';

import Image from "next/image";
import { useState } from "react";
import cn from "classnames";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/hooks/useDispatch";
import { useAppSelector } from "@/hooks/useSelector";
import { changeCinemaFilter, changeGenreFilter, changeNameFilter } from "@/redux/filter-page/filterSlice";
import DropDown from "@/components/dropDown";
import styles from "../styles/filter.module.css";
import arrowOpen from "../assets/images/arrow-open-min.svg";
import arrowClose from "../assets/images/arrow-close-min.svg";

export default function Filter() {
    const dispatch = useAppDispatch();
    const nameFilter = useAppSelector((state: RootState) => state.filterPage.nameFilter);
    const genreFilter = useAppSelector((state: RootState) => state.filterPage.genreFilter);
    const cinemaFilter = useAppSelector((state: RootState) => state.filterPage.cinemaFilter);
    const cinemas = useAppSelector((state: RootState) => state.filmsPage.cinemas);
    const [openGenreFilter, setOpenGenreFilter] = useState(false);
    const [openCinemaFilter, setOpenCinemaFilter] = useState(false);

    const onChangeGenreFilter = (filterValue: string | null) => {
        dispatch(changeGenreFilter(filterValue));
        setOpenGenreFilter(false);
    };

    const onChangeCinemaFilter = (filterValue: string | null, movies: [] | null) => {
        dispatch(changeCinemaFilter({ name: filterValue, movies: movies }));
        setOpenCinemaFilter(false);
    };

    return (
        <div className={styles.filter} id="filter">

            <form className={styles.form}>

                <p className={styles.header}>Фильтр поиска</p>

                <div>
                    <p className={styles.filterName}>Название</p>
                    <input
                        name="name"
                        type="text"
                        className={styles.filterByName}
                        placeholder="Название фильма"
                        onChange={(e) => dispatch(changeNameFilter(e.currentTarget.value))}
                        value={nameFilter} />
                </div>

                <div id="filter-genre-container">
                    <p className={styles.filterName}>Жанр</p>
                    <button className={cn(styles.filterSelect, genreFilter !== "Не выбрано" && genreFilter !== "Выберите жанр" && styles.active)} onClick={(e) => e.preventDefault()}>
                        <p>{genreFilter}</p>
                        {openGenreFilter ?
                            <Image
                                onClick={() => setOpenGenreFilter(false)}
                                src={arrowClose}
                                width={20}
                                height={20}
                                alt="filter by genre open"
                            /> :
                            <Image
                                onClick={() => {
                                    setOpenCinemaFilter(false);
                                    setOpenGenreFilter(true);
                                }}
                                src={arrowOpen}
                                width={20}
                                height={20}
                                alt="filter by genre open"
                            />}
                    </button>
                    <DropDown isOpen={openGenreFilter} id={"filter-genre-container"}>
                        <li onClick={(e) => {
                            onChangeGenreFilter(e.currentTarget.textContent);
                        }}>
                            Не выбрано
                        </li>
                        <li onClick={(e) => {
                            onChangeGenreFilter(e.currentTarget.textContent);
                        }}>
                            Боевик
                        </li>
                        <li onClick={(e) => {
                            onChangeGenreFilter(e.currentTarget.textContent);
                        }}>
                            Комедия
                        </li>
                        <li onClick={(e) => {
                            onChangeGenreFilter(e.currentTarget.textContent);
                        }}>
                            Фэнтези
                        </li>
                        <li onClick={(e) => {
                            onChangeGenreFilter(e.currentTarget.textContent);
                        }}>
                            Ужасы
                        </li>
                    </DropDown>
                </div>

                <div id="filter-cinema-container">
                    <p className={styles.filterName}>Кинотеатр</p>
                    <button className={cn(styles.filterSelect, cinemaFilter.name !== "Не выбрано" && cinemaFilter.name !== "Выберите кинотеатр" && styles.active)} onClick={(e) => e.preventDefault()}>
                        <p>{cinemaFilter.name}</p>
                        {openCinemaFilter ?
                            <Image
                                onClick={() => { setOpenCinemaFilter(false) }}
                                src={arrowClose}
                                width={20}
                                height={20}
                                alt="filter by cinema close"
                            /> :
                            <Image
                                onClick={() => {
                                    setOpenGenreFilter(false);
                                    setOpenCinemaFilter(true);
                                }}
                                src={arrowOpen}
                                width={20}
                                height={20}
                                alt="filter by cinema open"
                            />}
                    </button>
                    <DropDown isOpen={openCinemaFilter} id={"filter-cinema-container"}>
                        <li onClick={(e) => {
                            onChangeCinemaFilter(e.currentTarget.textContent, []);
                        }}>
                            Не выбрано
                        </li>
                        {cinemas.map(c => <li onClick={() => {
                            onChangeCinemaFilter(c.name, c.movieIds)
                        }}>{c.name}</li>)}
                    </DropDown>
                </div>


            </form>

        </div>
    )
};