import React from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/" className="brand-link">
          <i
            className="fas fa-money-bill-wave brand-image img-circle elevation-3 animation__shake"
            style={{ marginTop: '7px' }}
          ></i>
          <span className="brand-text font-weight-light">My Money</span>
        </Link>
        <Menu />
      </aside>
    </div>
  )
}

export default SideNav
