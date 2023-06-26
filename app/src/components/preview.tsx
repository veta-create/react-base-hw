import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/hooks/useDispatch";
import { useAppSelector } from "@/hooks/useSelector";
import { addTicket, decrement, increment, removeAll, removeTicket } from "@/redux/basket-page/basketSlice";
import Modal from "@/components/modal";
import Counter from "./counter";
import styles from "../styles/preview.module.css";
import close from "../assets/images/close.svg";

interface PreviewPropsTypes {
    id: string,
    ticketsCount: number,
    filmName: string,
    filmGenre: string,
    imageSrc: string,
    isTicket: boolean
};

export default function Preview(props: PreviewPropsTypes) {
    const dispatch = useAppDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const basket = useAppSelector((state: RootState) => state.basketPage.basket);

    const posterLoader = () => {
        return props.imageSrc;
    };


    const removeTicketsHandler = (isBasket: boolean) => {
        let currentTickets = basket.find(t => t.id === props.id)?.tickets;
        if (currentTickets === 1 && isBasket) {
            setModalIsOpen(true);
        } else {
            if (props.ticketsCount > 0) {
                dispatch(decrement());
                dispatch(removeTicket({
                    id: props.id,
                    name: props.filmName,
                    genre: props.filmGenre,
                    poster: props.imageSrc,
                    tickets: 1
                }));
            };
        }
    };

    const addTicketsHandler = () => {
        if (props.ticketsCount < 30) {
            dispatch(increment());
            dispatch(addTicket({
                id: props.id,
                name: props.filmName,
                genre: props.filmGenre,
                poster: props.imageSrc,
                tickets: 1
            }));
        };
    };

    const modalSubmit = () => {
        dispatch(removeAll(props.id));
        setModalIsOpen(false);
    };

    const modalCancel = () => {
        setModalIsOpen(false);
    };


    if (props.isTicket) {
        return (
            <div className={styles.previewTicket}>
                <div className={styles.poster}>
                    <Image loader={posterLoader} src="preview.png" width={100} height={120} alt={`Prewiew for film ${props.filmName}`} />
                </div>
                <div className={styles.description}>
                    <Link href={`/films/film/${props.id}`}><p className={styles.name}>{props.filmName}</p></Link>
                    <p className={styles.genre}>{props.filmGenre}</p>
                </div>

                <Counter removeTicketsHandler={() => removeTicketsHandler(true)}
                    addTicketsHandler={addTicketsHandler}
                    ticketsCount={props.ticketsCount} />

                <div onClick={() => setModalIsOpen(true)} className={styles.close}>
                    <Image src={close}
                        width={20}
                        height={20}
                        alt="close" />
                </div>
                <Modal isOpen={modalIsOpen} title={"Удаление билета"} onSubmit={modalSubmit} onCancel={modalCancel} />
            </div>
        )
    } else {
        return (
            <div className={styles.preview}>
                <div className={styles.poster}>
                    <Image loader={posterLoader} src="preview.png" width={100} height={120} alt={`Prewiew for film ${props.filmName}`} />
                </div>
                <div className={styles.description}>
                    <Link href={`/films/film/${props.id}`}><p className={styles.name}>{props.filmName}</p></Link>
                    <p className={styles.genre}>{props.filmGenre}</p>
                </div>

                <Counter removeTicketsHandler={() => removeTicketsHandler(false)}
                    addTicketsHandler={addTicketsHandler}
                    ticketsCount={props.ticketsCount} />

            </div>
        )
    };
};
