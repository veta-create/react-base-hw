import Filter from './filter';
import Preview from './preview';
import styles from './styles.module.css';
import frodo from "../assets/images/frodo.png"

export default function FilmsContent() {
  return (
    <div className={styles.filmsContent}>
      <Filter />
      <div className={styles.content}>
        <Preview filmName="Властелин колец" filmGenre="Фэнтези" imageSrc={frodo} isTicket={false} />
        <Preview filmName="Властелин колец" filmGenre="Фэнтези" imageSrc={frodo} isTicket={false} />
        <Preview filmName="Властелин колец" filmGenre="Фэнтези" imageSrc={frodo} isTicket={false} />
        <Preview filmName="Властелин колец" filmGenre="Фэнтези" imageSrc={frodo} isTicket={false} />
        <Preview filmName="Властелин колец" filmGenre="Фэнтези" imageSrc={frodo} isTicket={false} />
      </div>
    </div>
  )
};
