import { Routes, Route } from 'react-router-dom'
import BillingCycle from '../billingCycle/BillingCycle'
import Dashboard from '../dashboard/Dashboard'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="billingcycles" element={<BillingCycle />} />
    </Routes>
  )
}

export default AppRoutes
