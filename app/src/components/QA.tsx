import React, { useCallback, useContext, useState } from "react";
import Image from "next/image";
import styles from "../styles/QA.module.css";
import open from "../assets/images/arrow-open.svg";
import close from "../assets/images/arrow-close.svg";

const MenuContext = React.createContext(false);

const MenuAccordion = ({ children }: { children: React.ReactNode }) => {
    const [activeGroup, setActiveGroup] = useState();

    const switchGroup = useCallback((title: undefined) => {
        setActiveGroup((activeTitle => activeTitle === title ? undefined : title));
    }, []);
    return <MenuContext.Provider value={{ activeGroup, switchGroup }}>{children}</MenuContext.Provider>;
};

MenuAccordion.Group = function MenuGroup({ children, title }) {
    const { activeGroup, switchGroup } = useContext(MenuContext);
    return <div className={styles.item}>
        <div className={styles.title}>
            <div>{title}</div>
            {activeGroup === title ? <div className={styles.icon}>
                <Image
                    onClick={() => switchGroup(title)}
                    src={close}
                    width={32}
                    height={32}
                    alt="close icon"
                />
            </div> :
                <div className={styles.icon}>
                    <Image
                        onClick={() => switchGroup(title)}
                        src={open}
                        width={32}
                        height={32}
                        alt="open icon"
                    />
                </div>}
        </div>
        {activeGroup === title && <div>{children}</div>}
    </div>;
};

MenuAccordion.Item = function MenuItem({ children, title, isTitle }: { children: { title: string; isTitle: boolean; }, title: string; isTitle: boolean; }) {
    return <div className={isTitle ? styles.mainTitle : styles.text}>{title}</div>;
};

export default function QA() {
    return <div className={styles.accardion}>
        <MenuAccordion>
            <MenuAccordion.Item title={"Вопросы-ответы"} isTitle={true} />
            <MenuAccordion.Group title={"Что такое Билетопоиск?"}>
                <MenuAccordion.Item isTitle={false} title={"Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."} />
            </MenuAccordion.Group>
            <MenuAccordion.Group title={"Какой компании принадлежит Билетопоиск?"}>
                <MenuAccordion.Item isTitle={false} title={"Билетопоиск является продуктом Яндекса."} />
            </MenuAccordion.Group>
            <MenuAccordion.Group title={"Как купить билет на Билетопоиск?"}>
                <MenuAccordion.Item isTitle={false} title={"Билет на сеанс можно приобрести на главной странице сайта. Для этого нужно использовать кнопку '+' в верхнем правом углу карточки фильма. Еще одиин вариант - перейти на страницу фильма и использовать кнопку там."} />
            </MenuAccordion.Group>
            <MenuAccordion.Group title={"Как оставить отзыв на Билетопоиск?"}>
                <MenuAccordion.Item isTitle={false} title={"Нужно перейти на страницу фильма, щелкнуть по превью, внизу страницы есть специальное поле для комментариев."} />
            </MenuAccordion.Group>
        </MenuAccordion>
    </div>
}