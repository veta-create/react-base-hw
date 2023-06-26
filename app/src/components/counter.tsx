import Image from "next/image";
import styles from "../styles/preview.module.css";
import inactiveMinus from "../assets/images/inactive-minus.svg";
import activeMinus from "../assets/images/active-minus.svg";
import inactivePlus from "../assets/images/inactive-plus.svg";
import activePlus from "../assets/images/active-plus.svg";

interface CounterPropsTypes {
    removeTicketsHandler: React.MouseEventHandler<HTMLDivElement>,
    addTicketsHandler: React.MouseEventHandler<HTMLDivElement>,
    ticketsCount: number | undefined
};

export default function Counter(props: CounterPropsTypes) {
    return (
        <div className={styles.counter}>
            <div className={styles.ticketsCounter}>
                <div onClick={props.removeTicketsHandler}
                    className={styles.minus}>
                    {props.ticketsCount !== undefined ?
                        <Image src={props.ticketsCount > 0 ? activeMinus : inactiveMinus}
                            width={20}
                            height={20}
                            alt="minus" />
                        :
                        <Image src={inactiveMinus}
                            width={20}
                            height={20}
                            alt="minus" />
                    }
                </div>
                <div className={styles.ticketsCount}>{props.ticketsCount ? props.ticketsCount : 0}</div>
                <div
                    onClick={props.addTicketsHandler}
                    className={styles.plus}>
                    {props.ticketsCount !== undefined ?
                        <Image src={props.ticketsCount < 30 ? activePlus : inactivePlus}
                            width={20}
                            height={20}
                            alt="plus" />
                        :
                        <Image src={activePlus}
                            width={20}
                            height={20}
                            alt="plus" />
                    }
                </div>
            </div>
        </div>
    )
};