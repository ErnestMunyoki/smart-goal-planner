import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Deposit from './Components/DepositForm'
import GoalsForm from './Components/GoalForm'
import GoalsList from './Components/GoalList'
import Overview from './Components/Overview'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Deposit />
    <GoalsForm />
    <GoalsList/>
    <Overview />
        
  </StrictMode>,
)
