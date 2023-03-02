import React, { useEffect, useState } from 'react'

const useItems = (data) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        if (Array.isArray(data)) {
            setItems(i => [...i, ...data])
        }
    }, [data]);
    return [items];
}

export default useItems