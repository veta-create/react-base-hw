import Preview from "../filmsContent/preview";
import styles from "./styles.module.css";
import frodo from "../../assets/images/frodo.png";

export default function Basket(props) {
  return (
    <div className={styles.basket}>
      <div className={styles.tickets}>
        <Preview filmName="Властелин колец" filmGenre="Фэнтези" imageSrc={frodo} isTicket={true} />
        <Preview filmName="Властелин колец" filmGenre="Фэнтези" imageSrc={frodo} isTicket={true} />
        <Preview filmName="Властелин колец" filmGenre="Фэнтези" imageSrc={frodo} isTicket={true} />
      </div>
      <div className={styles.ticketsCount}>
        <p>Итого билетов:</p>
        <p>{props.ticketsCount}</p>
      </div>
    </div>
  )
};