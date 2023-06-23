import styles from "./styles.module.css";
import inactiveMinus from "../../../assets/images/inactive-minus.svg";
import activeMinus from "../../../assets/images/active-minus.svg";
import inactivePlus from "../../../assets/images/inactive-plus.svg";
import activePlus from "../../../assets/images/active-plus.svg";
import Image from "next/image";

export default function Counter(props) {

    return (
        <div className={styles.counter}>
            <div className={styles.ticketsCounter}>
                    <div onClick={props.removeTicketsHandler}
                        className={styles.minus}>
                        <Image src={props.ticketsCount > 0 ? activeMinus : inactiveMinus}
                            width={20}
                            height={20}
                            alt="minus" />
                    </div>
                    <div className={styles.ticketsCount}>{props.ticketsCount}</div>
                    <div
                        onClick={props.addTicketsHandler}
                        className={styles.plus}>
                        <Image src={props.ticketsCount < 30 ? activePlus : inactivePlus}
                            width={20}
                            height={20}
                            alt="plus" />
                    </div>
                </div>
        </div>
    )
};