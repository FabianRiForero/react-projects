import React from 'react'
import styles from './mainContainer.module.scss'

const MainContainer = ({ children }) => {
    return (
        <div className={styles.mainContainer}>{children}</div>
    )
}

export default MainContainer