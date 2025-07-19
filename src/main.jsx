import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Deposit from './Components/DepositForm'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Deposit />
    <App/>
  </StrictMode>,
)
