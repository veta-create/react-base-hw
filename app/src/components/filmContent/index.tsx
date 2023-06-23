import Image from 'next/image';
import styles from './styles.module.css';
import Comment from './comment';
import noPhoto from "../assets/images/noPhoto.png";

export default function FilmContent(props) {
    return (
        <div className={styles.filmContent}>
            <div className={styles.filmInfo}>
                <div className={styles.poster}>
                    <Image
                        src={props.imageSrc}
                        width={400}
                        height={500}
                        alt={`poster for film ${props.filmName}`}
                    />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.name}>{props.filmName}</h1>
                    <div className={styles.genre}><b>Жанр:</b> {props.filmGenre}</div>
                    <div className={styles.year}><b>Год выпуска:</b> {props.filmYear}</div>
                    <div className={styles.rating}><b>Рейтинг:</b> {props.filmRating}</div>
                    <div className={styles.producer}><b>Режиссер:</b> {props.filmProducer}</div>
                    <div className={styles.description}>
                        <div><b>Описание</b></div>
                        <div className={styles.text}>{props.filmDescription}</div>
                    </div>
                </div>
            </div>
            <div className={styles.comments}>
                <Comment
                    userPhoto={noPhoto}
                    userName="Роман"
                    userComment="По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет назад, но тот момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро борется со злом, где зеленые рощи перемежаются с поросшими мхом статуями и древними развалинами, в мир, где пробираясь лесною тропой можно встретить остроухих неувядающих эльфов или мерзких орков – кому как повезет..."
                    userRating="8"
                />
                <Comment
                    userPhoto={noPhoto}
                    userName="Роман"
                    userComment="По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет назад, но тот момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро борется со злом, где зеленые рощи перемежаются с поросшими мхом статуями и древними развалинами, в мир, где пробираясь лесною тропой можно встретить остроухих неувядающих эльфов или мерзких орков – кому как повезет..."
                    userRating="8"
                />
                <Comment
                    userPhoto={noPhoto}
                    userName="Роман"
                    userComment="По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет назад, но тот момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро борется со злом, где зеленые рощи перемежаются с поросшими мхом статуями и древними развалинами, в мир, где пробираясь лесною тропой можно встретить остроухих неувядающих эльфов или мерзких орков – кому как повезет..."
                    userRating="8"
                />
            </div>
        </div>
    )
};
