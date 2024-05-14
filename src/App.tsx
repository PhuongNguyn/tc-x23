import './App.css'
import Test from './Test'
import Test1 from './Test1'
import { useAppDispatch } from './app/hooks'
import { incrementByNumber } from './features/counter/counterSlice'

function App() {
  const dispatch = useAppDispatch()

  const handleButtonClick = () => {
    dispatch(incrementByNumber(5))
  }

  return (
    <>
      <button onClick={handleButtonClick}>Increase</button>
      <Test />
      <Test1 />
    </>
  )
}

export default App
