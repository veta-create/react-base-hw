import Image from 'next/image';
import styles from './styles.module.css';
import inactiveMinus from "../../assets/images/inactive-minus.svg";
import activePlus from "../../assets/images/active-plus.svg";
import close from "../../assets/images/close.svg";

export default function Preview(props) {
    if (props.isTicket) {
        return (
            <div className={styles.previewTicket}>
                <div className={styles.poster}>
                    <Image
                        src={props.imageSrc}
                        width={100}
                        height={120}
                        alt={`Prewiew for film ${props.filmName}`}
                    />
                </div>
                <div className={styles.description}>
                    <p className={styles.name}>{props.filmName}</p>
                    <p className={styles.genre}>{props.filmGenre}</p>
                </div>

                <div className={styles.ticketsCounter}>
                    <div className={styles.minus}>
                        <Image src={inactiveMinus}
                            width={20}
                            height={20}
                            alt="inactiveMinus" />
                    </div>
                    <div className={styles.ticketsCount}>0</div>
                    <div className={styles.plus}>
                        <Image src={activePlus}
                            width={20}
                            height={20}
                            alt="inactiveMinus" />
                    </div>
                </div>

                <div className={styles.close}>
                    <Image src={close}
                        width={20}
                        height={20}
                        alt="close" />
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.preview}>
                <div className={styles.poster}>
                    <Image
                        src={props.imageSrc}
                        width={100}
                        height={120}
                        alt={`Prewiew for film ${props.filmName}`}
                    />
                </div>
                <div className={styles.description}>
                    <p className={styles.name}>{props.filmName}</p>
                    <p className={styles.genre}>{props.filmGenre}</p>
                </div>

                <div className={styles.ticketsCounter}>
                    <div className={styles.minus}>
                        <Image src={inactiveMinus}
                            width={20}
                            height={20}
                            alt="inactiveMinus" />
                    </div>
                    <div className={styles.ticketsCount}>0</div>
                    <div className={styles.plus}>
                        <Image src={activePlus}
                            width={20}
                            height={20}
                            alt="inactiveMinus" />
                    </div>
                </div>
            </div>
        )
    };
};
