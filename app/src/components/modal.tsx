import Image from "next/image";
import PropTypes from "prop-types";
import Portal from "./portal";
import styles from "../styles/modal.module.css";
import cancel from "../assets/images/cancel.svg";

const Modal = (props) => {
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

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func
};

Modal.defaultProps = {
    title: "Modal",
    isOpen: false,
    onCancel: () => { },
    onSubmit: () => { }
}

export default Modal;