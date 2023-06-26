import Portal from "./portal";
import styles from "../styles/dropDown.module.css";

const DropDown = ({ children, isOpen, id }: { children: React.ReactNode, isOpen: boolean, id: string }) => {
    if (isOpen) {
        return (
            <Portal isModal={false} id={id}>
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