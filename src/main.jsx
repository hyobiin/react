import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> // console.log에서 두 번 출력되는 것을 방지하려고 주석
    <App />
  // </StrictMode>,
)
