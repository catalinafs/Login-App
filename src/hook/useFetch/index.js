import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(answer => answer.json())
            .then(info => {
                setData(info);
            })
            .catch((error) => {
                setError(true);
            })
        setLoading(true);
    }, []);

    return { data, error, loading }
}
