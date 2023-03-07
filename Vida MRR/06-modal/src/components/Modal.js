import React, { useRef } from 'react'
import styles from './modal.module.scss'

const Modal = ({ children, title, root }) => {
    const ref = useRef(null);

    const callback = e => {
        root.unmount();
        document.querySelector('#modal').remove();
        ref.current.removeEventListener('animationend', callback);
    }

    const handleClick = () => {
        ref.current.classList.add(styles.fadeOut);
        ref.current.addEventListener('animationend', callback, { once: true });
    }

    return (
        <div className={styles.modalContainer} ref={ref}>
            <div className={styles.modalView}>
                <div className={styles.modalHeader}>
                    <div>{title}</div>
                    <div>
                        <button className={styles.closeButton} onClick={handleClick}>X</button>
                    </div>
                </div>
                <div className={styles.modalContent}>{children}</div>
            </div>
        </div>
    )
}

export default Modal