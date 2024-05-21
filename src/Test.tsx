import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useDebounce from "./hooks/useDebounce"
import useThrottle from "./hooks/useThrottle"

const Test = () => {
    const [search, setSearch] = useState()

    const handleGetData = () => {
        console.log('123123123123')
    }
    const searchValue = useDebounce(search, 1000)
    const searchValueThrottle = useThrottle(search, 1000)

    useEffect(() => {
        handleGetData()
    }, [searchValueThrottle])
    return (
        <>
            <p className="text-center text-[black] font-bold"><Link to={'/test1'}>Back to test 1 page</Link></p>
            <input value={search} onChange={(e) => { setSearch(e.target.value) }} />
        </>
    )
}

export default Test