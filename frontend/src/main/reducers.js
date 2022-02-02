import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import tabReducer from '../common/tab/tabReducer'
import DashboardReducer from '../dashboard/dashboardReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: tabReducer,
    billingCycles: BillingCycleReducer,
    form: formReducer
})

export default rootReducer