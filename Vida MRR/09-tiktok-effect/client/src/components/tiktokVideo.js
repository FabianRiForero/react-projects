import React, { useEffect, useRef } from 'react'

const TiktokVideo = ({ item, current }) => {
    const ref = useRef();

    useEffect(() => {
        if (current && ref.current) {
            ref.current.play();
        } else {
            ref.current.pause();
            ref.current.currentTime = 0;
        }
    }, [current]);

    return (
        <div className='tiktokVideo'>
            <video ref={ref} width='100%' height='100%'>
                <source src={`http://localhost:3002/videos/${item.path}`} type='video/mp4' />
            </video>
        </div>
    )
}

export default TiktokVideo