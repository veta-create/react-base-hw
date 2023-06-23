import FilmContent from '../../../src/components/filmContent';
import styles from '../page.module.css';
import frodoB from "../../../src/assets/images/frodoB.png"

export default function FilmPage() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <FilmContent imageSrc={frodoB}
          filmName="Властелин колец"
          filmGenre="Фэнтези"
          filmYear="2001"
          filmRating="8"
          filmProducer="Питер Джексон"
          filmDescription="Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил." />
      </div>
    </main>
  )
};
