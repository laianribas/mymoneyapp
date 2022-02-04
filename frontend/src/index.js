import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Promise from 'redux-promise'
import Multi from 'redux-multi'
import Thunk from 'redux-thunk'
import reducers from './main/reducers'
import { Routes, Route, IndexRoute, Redirect } from 'react-router'
//import Routes from './main/routes'

import AuthOrApp from './main/authOrApp'
import Dashboard from './dashboard/Dashboard'
import BillingCycle from './billingCycle/BillingCycle'
import { Auth } from './auth/auth'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(Multi, Thunk, Promise)(createStore)(
  reducers,
  devTools
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthOrApp />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
