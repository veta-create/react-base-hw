'use client';

import { Formik, Form, Field } from "formik";
import cn from "classnames";
import styles from "./styles.module.css";

export default function Filter() {
    return (
        <div className={styles.filter}>
            <Formik initialValues={{ name: "", genre: "placeholder", cinema: "placeholder" }} onSubmit={() => { }}>
                <Form className={styles.form}>

                    <p className={styles.header}>Фильтр поиска</p>

                    <div>
                        <p className={styles.filterName}>Название</p>
                        <Field className={styles.filterByName} placeholder="Название фильма" type="text" name="name" />
                    </div>

                    <div>
                        <p className={styles.filterName}>Жанр</p>
                        <Field className={styles.filterByGenre} as="select" name="genre">
                            <option value="placeholder" className={styles.optionNone}>Выберите кинотеатр</option>
                            <option value="nonde" className={styles.optionNone}>Не выбрано</option>

                            <option value="action">Боевик</option>
                            <option value="comedy">Комедия</option>
                            <option value="fantasy">Фэнтези</option>
                            <option value="horror">Ужасы</option>
                        </Field>
                    </div>

                    <div>
                        <p className={styles.filterName}>Кинотеатр</p>
                        <Field className={cn(styles.filterByCinema, styles.box)} as="select" name="cinema">
                            <option value="placeholder" className={styles.optionNone}>Выберите кинотеатр</option>
                            <option value="none" className={styles.optionNone}>Не выбрано</option>
                            <option value="cinema" className={styles.optionNone}>Кинотеатр</option>

                            {/* получаем кинотеатры с сервера */}
                        </Field>
                    </div>

                </Form>
            </Formik>

        </div>
    )
};