import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import DarkingContext from './Components/DarkingContext.jsx'
import CounterContexet from './Components/CounterContexet.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DarkingContext>
        <CounterContexet>
          <App />
        </CounterContexet>
      </DarkingContext>
    </BrowserRouter>
  </StrictMode>,
)
