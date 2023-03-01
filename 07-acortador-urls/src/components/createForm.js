import React, { useState } from 'react'
import styles from './createForm.module.css';

const CreateForm = ({dispatch}) => {
    const [url, setUrl] = useState('');

    const handleChange = e => setUrl(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD', data: url});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={url} onChange={handleChange} className={styles.input} placeholder='Type a valid URL...' />
        </form>
    )
}

export default CreateForm