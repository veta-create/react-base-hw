import React from "react";
import Image from "next/image";
import Portal from "./portal";
import styles from "../styles/modal.module.css";
import cancel from "../assets/images/cancel.svg";


interface ModalPropsTypes {
    isOpen: boolean,
    title: string,
    onSubmit: React.MouseEventHandler<HTMLButtonElement>,
    onCancel: React.MouseEventHandler<HTMLElement>;
};


const Modal = (props: ModalPropsTypes) => {
    if (props.isOpen) {
        return (
            <Portal isModal={true}>
                <div className={styles.modalOverlay}>
                    <div className={styles.modalWindow}>
                        <div className={styles.modalHeader}>
                            <div className={styles.modalTitle}>
                                {props.title}
                            </div>
                            <Image className={styles.close} onClick={props.onCancel} src={cancel} width={16} height={16} alt="cancel" />
                        </div>
                        <div className={styles.modalBody}>
                            Вы уверены, что хотите удалить билет?
                        </div>
                        <div className={styles.modalFooter}>
                            <button className={styles.submit} onClick={props.onSubmit}>Да</button>
                            <button className={styles.cancel} onClick={props.onCancel}>Нет</button>
                        </div>
                    </div>
                </div>
            </Portal>
        )
    }
}

export default Modal;