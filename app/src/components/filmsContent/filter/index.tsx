'use client';

import { Formik, Form, Field } from "formik";
import cn from "classnames";
import styles from "./styles.module.css";
import { useAppDispatch } from "@/hooks/useDispatch";
import { changeNameFilter } from "@/redux/filter-page/filterSlice";
import { useAppSelector } from "@/hooks/useSelector";
import { RootState } from "@/redux/store";

export default function Filter(props) {
    const dispatch = useAppDispatch();
    const nameFilter = useAppSelector((state: RootState) => state.filterPage.nameFilter)
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

                {/* <div>
                    <p className={styles.filterName}>Жанр</p>
                    <Field className={styles.filterByGenre} as="select" name="genre">
                        <option value="placeholder" className={styles.optionNone}>Выберите кинотеатр</option>
                        <option value="nonde" className={styles.optionNone}>Не выбрано</option>

                        <option value="action">Боевик</option>
                        <option value="comedy">Комедия</option>
                        <option value="fantasy">Фэнтези</option>
                        <option value="horror">Ужасы</option>
                    </Field>
                </div> */}
                {/* 
                <div>
                    <p className={styles.filterName}>Кинотеатр</p>
                    <Field className={cn(styles.filterByCinema, styles.box)} as="select" name="cinema">
                        <option value="placeholder" className={styles.optionNone}>Выберите кинотеатр</option>
                        <option value="none" className={styles.optionNone}>Не выбрано</option>
                        <option value="cinema" className={styles.optionNone}>Кинотеатр</option>

                    </Field>
                </div> */}

            </form>

        </div>
    )
};