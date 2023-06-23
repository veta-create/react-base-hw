import Preview from "../filmsContent/preview";
import styles from "./styles.module.css";
import { useAppSelector } from "@/hooks/useSelector";
import { RootState } from "@/redux/store";

export default function Basket() {
  const ticketsCount = useAppSelector((state: RootState) => state.basketPage.ticketsCount);
  const tickets = useAppSelector((state: RootState) => state.basketPage.basket);
  return (
    <div className={styles.basket}>
      <div className={styles.tickets}>
        {tickets.map(t => <Preview
          key={t.id}
          id={t.id}
          filmName={t.name}
          filmGenre={t.genre}
          imageSrc={t.poster}
          ticketsCount={t.tickets}
          isTicket={true} />)}
      </div>
      <div className={styles.ticketsCount}>
        <p>Итого билетов:</p>
        <p>{ticketsCount}</p>
      </div>
    </div>
  )
};