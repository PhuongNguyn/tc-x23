import { useEffect, useState } from "react";


const useDebounce = (searchValue, delay) => {
    const [debounceValue, setDebounceValue] = useState(searchValue);
    const d = 8;
    const e = 10;
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(searchValue);
        }, delay);

        // Clean up function la 1 ham se duoc goi khi component unmount
        return () => {
            clearTimeout(handler)
        }
    }, [searchValue, delay])

    return debounceValue
}

export default useDebounce