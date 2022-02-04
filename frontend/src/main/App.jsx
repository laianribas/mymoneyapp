import Messages from '../common/msg/messages'
import Footer from '../common/template/Footer'
import Header from '../common/template/Header'
import SideNav from '../common/template/SideNav'
import Routes from './routes'
import React from 'react'

import { HashRouter } from 'react-router-dom'

import './custom.css'

function App() {
  return (
    <HashRouter>
      <Header />
      <SideNav />
      <Routes />
      <Footer />
      <Messages />
    </HashRouter>
  )
}

export default App
