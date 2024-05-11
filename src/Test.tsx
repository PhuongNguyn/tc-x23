import { useAppSelector } from "./app/hooks"

const Test = () => {
    const counter = useAppSelector((state) => state.counter.value)
    return (
        <p className="text-center text-[black] font-bold">{counter}</p>
    )
}

export default Test