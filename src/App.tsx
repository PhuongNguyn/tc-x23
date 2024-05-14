import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'
import Test1 from './Test1'
import Test3 from './Test3'
import { useCallback } from 'react'

function App() {
  const [loading, setLoading] = useState(false)

  // const result = () => {

  //   // Đây là 1 phép tính phức tạp
  //   const a = 5
  //   const b = 6
  //   const c = 7

  //   return a + b + c
  // }

  const result = useMemo(() => {
    // Đây là 1 phép tính phức tạp
    const a = 5
    const b = 6
    const c = 7

    return a + b + c
  }, [loading])


  // Primitive Type - Kiểu dữ liệu tham trị (Number, string,...)
  const a = 5

  // Reference Type - Kiểu dữ liệu tham chiếu (Array, Object, Function,...)
  const test3Function = useCallback(() => {

  }, [])
  return (
    <div className='text-center text-[black]'>
      <button onClick={() => setLoading(!loading)}>SET LOADING</button>
      {loading && <>Loading...</>}
      {/* <Test1 loading={loading} /> */}
      <Test3 test3Function={test3Function} />
    </div>
  )
}

export default App
