import { combineReducers } from 'redux'
import tabReducer from '../common/tab/tabReducer'
import DashboardReducer from '../dashboard/dashboardReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: tabReducer,
    billingCycles: BillingCycleReducer
})

export default rootReducer