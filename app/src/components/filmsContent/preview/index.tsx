import Image from 'next/image';
import styles from './styles.module.css';
import inactiveMinus from "../../../assets/images/inactive-minus.svg";
import activeMinus from "../../../assets/images/active-minus.svg";
import inactivePlus from "../../../assets/images/inactive-plus.svg";
import activePlus from "../../../assets/images/active-plus.svg";
import close from "../../../assets/images/close.svg";
import { useAppDispatch } from '@/hooks/useDispatch';
import { addTicket, decrement, increment, removeAll, removeTicket } from '@/redux/basket-page/basketSlice';
import React, { useState } from 'react';
import Link from 'next/link';
import Modal from '@/components/modal';
import { useAppSelector } from '@/hooks/useSelector';
import { RootState } from '@/redux/store';
import Counter from './counter';

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
                    <img width="100px" height="120px" src={props.imageSrc} alt={`Prewiew for film ${props.filmName}`} />
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
                    <img width="100px" height="120px" src={props.imageSrc} alt={`Prewiew for film ${props.filmName}`} />
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
