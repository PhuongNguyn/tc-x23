import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<>...Loading</>}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
