'use client';

import styles from "./styles.module.css";
import cn from "classnames";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/useDispatch";
import { changeGenreFilter, changeNameFilter } from "@/redux/filter-page/filterSlice";
import { useAppSelector } from "@/hooks/useSelector";
import { RootState } from "@/redux/store";
import DropDown from "@/components/dropDown";
import Image from "next/image";
import arrowOpen from "../../../assets/images/arrow-open-min.svg";
import arrowClose from "../../../assets/images/arrow-close-min.svg";

export default function Filter() {
    const dispatch = useAppDispatch();
    const nameFilter = useAppSelector((state: RootState) => state.filterPage.nameFilter);
    const genreFilter = useAppSelector((state: RootState) => state.filterPage.genreFilter);
    const [openGenreFilter, setOpenGenreFilter] = useState(false);

    const onChangeGenreFilter = (filterValue: string | null) => {
        dispatch(changeGenreFilter(filterValue));
        setOpenGenreFilter(false);
    };

    return (
        <div className={styles.filter}>

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

                <div>
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
                                onClick={() => setOpenGenreFilter(true)}
                                src={arrowOpen}
                                width={20}
                                height={20}
                                alt="filter by genre open"
                            />}
                    </button>
                    <DropDown isOpen={openGenreFilter}>
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

            </form>

        </div>
    )
};