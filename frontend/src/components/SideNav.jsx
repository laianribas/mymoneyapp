import React from 'react'
import Menu from './Menu'

const SideNav = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="#" className="brand-link">
          <i
            class="fas fa-money-bill-wave brand-image img-circle elevation-3"
            style={{ marginTop: '7px' }}
          ></i>
          <span className="brand-text font-weight-light">My Money</span>
        </a>
        <Menu />
      </aside>
    </div>
  )
}

export default SideNav
