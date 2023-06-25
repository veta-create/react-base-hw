import Image from "next/image";
import styles from "../styles/comment.module.css";

export default function Comment(props) {
    return (
        <div className={styles.userComment}>
            <div className={styles.userPhoto}>
                <Image
                    src={props.userPhoto}
                    width={100}
                    height={100}
                    alt="user photo"
                />
            </div>

            <div className={styles.comment}>
                <div className={styles.userInfo}>
                    <div className={styles.userName}>{props.userName}</div>
                    <div className={styles.userRating}>Оценка: <b>{props.userRating}</b></div>
                </div>
                <div className={styles.text}>{props.userComment}</div>
            </div>

        </div>
    )
};