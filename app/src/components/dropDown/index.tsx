import Portal from "../portal";
import styles from "./styles.module.css";

const DropDown = ({children, isOpen}) => {
    console.log(isOpen)
    if (isOpen) {
        return (
            <Portal>
                <div className={styles.dropDown}>
                    <ul>
                        {children}
                    </ul>
                </div>
            </Portal>
        )
    }
}
export default DropDown;