import './App.css'
import { Route, Routes } from 'react-router'
import React from 'react'

const Test = React.lazy(() => import('./Test'))
const Test1 = React.lazy(() => import('./Test1'))

function App() {

  return (
    <div className='text-center text-[black]'>
      <Routes>
        <Route path='/' element={<Test />} />
        <Route path='/test1' element={<Test1 />} />
      </Routes>
    </div>
  )
}

export default App
