import React from 'react'
import styles from './itemsContainer.module.css'

const ItemsContainer = ({ children }) => {
    return (
        <div className={styles.itemsContainer}>{children}</div>
    )
}

export default ItemsContainer