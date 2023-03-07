import React from 'react'
import styles from './item.module.css';

const Item = ({ item }) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemInfoContainer}>
                <span className={styles.itemInfoTag}>URL:</span>
                <span>{item.url}</span>
            </div>
            <div className={styles.itemInfoContainer}>
                <span className={styles.itemInfoTag}>ShortURL:</span>
                <span>
                    <a href={`http://localhost:3000/u/${item.shortUrl}`} target='_blank' rel="noreferrer">
                        http://localhost:3000/u/{item.shortUrl}
                    </a>
                </span>
            </div>
            <div className={styles.itemInfoContainer}>
                <span className={styles.itemInfoTag}>Views:</span>
                <span>{item.views} views</span>
            </div>
        </div>
    )
}

export default Item