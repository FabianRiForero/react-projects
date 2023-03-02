import { useEffect, useState } from 'react'

const useFetch = (url, type) => {
    const [data, setData] = useState(null);
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(url);
            setResponse(response);

            try {
                switch (type) {
                    case 'text':
                        const text = await response.text();
                        setData(text);
                        setIsLoading(false);
                        break;
                    case 'json':
                        const json = await response.json();
                        setData(json);
                        setIsLoading(false);
                        break;
                    default:
                }
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        }
        if (!!url) {
            fetchData();
        }
    }, [url, type]);

    return [response, data, isLoading]
}

export default useFetch