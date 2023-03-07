import React, { memo, useEffect, useState } from 'react'
import TiktokVideo from './tiktokVideo';
import useFetch from './useFetch';
import useItems from './useItems';
import './tiktok.css';

const Tiktok = () => {
    const [url, setUrl] = useState('');
    const [page, setPage] = useState(0);
    const [index, setIndex] = useState(0);
    const [response, data, isLoading] = useFetch(url, 'json');
    const [items] = useItems(data);

    useEffect(() => {
        setUrl(`http://localhost:3002/page/${page}`);
    }, [page]);

    const nextVideo = () => {
        if (index + 2 === items.length) {
            setPage(page + 1);
        } else {
            setIndex(index + 1);
        }
    }
    const prevVideo = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    return (
        <div>
            <div>{isLoading ? 'Cargando' : ''}</div>
            <button disabled={isLoading} onClick={() => nextVideo()}>Next Video</button>
            <button disabled={isLoading} onClick={() => prevVideo()}>Prev Video</button>
            <div className='tiktoksContainerView'>
                <div className='tiktoksCotainer' style={{ transform: `translateY(${-1 * index * 960}px)` }}>
                    <Videos items={items} index={index} />
                </div>
            </div>
        </div>
    );
}

const Videos = memo(({ items, index }) => {
    // console.log('Hello World');
    return (
        <>
            {items?.map((item, i) => <TiktokVideo key={item.id} item={item} current={index === i} />)}
        </>
    )
});

export default Tiktok