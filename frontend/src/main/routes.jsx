import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/Dashboard'
import BillingCycle from '../billingCycle/BillingCycle'

const AppRouter = (props) => (
  <div className="content-wrapper">
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/billingCycle" component={BillingCycle} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
)
export default AppRouter
