import { useState, useEffect } from 'react';

function useDebounced(value, delay) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const timerID = setTimeout(() => setDebounced(value), delay);
        return () => {
            clearTimeout(timerID);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounced;
}

export default useDebounced;
