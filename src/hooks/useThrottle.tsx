import { useEffect, useRef, useState } from "react"


const useThrottle = (value, time) => {
    const [throttledValue, setThrottledValue] = useState(value)
    const lastExecuted = useRef(Date.now())

    useEffect(() => {
        if (Date.now() >= lastExecuted.current + time) {
            console.log("Time end")
            lastExecuted.current = Date.now()
            setThrottledValue(value)
        } else {
            console.log("Time is not end")
            const timerId = setTimeout(() => {
                lastExecuted.current = Date.now()
                setThrottledValue(value)
            }, time)

            return () => clearTimeout(timerId)
        }
    }, [value, time])
    return throttledValue
}

export default useThrottle