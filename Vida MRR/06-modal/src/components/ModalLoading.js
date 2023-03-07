import React from 'react';
import styles from './modal.module.scss';

const ModalLoading  = () => {
  return (
    <div className={styles.loadingContainer}>
        <div className={styles.loadingView}>Loading ...</div>
    </div>
    )
}

export default ModalLoading