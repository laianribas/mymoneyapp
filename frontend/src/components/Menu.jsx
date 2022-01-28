import React from 'react'
import MenuItem from './MenuItem'
import MenuTree from './MenuTree'

const Menu = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Menu */}
      <nav className="sidebar-menu">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <MenuItem path="#" icon="fas fa-tachometer-alt" label="Dashboard" />
          <MenuTree icon="fa fa-edit" label="Cadastro">
            <MenuItem
              path="#billingcycles"
              icon="fas fa-hand-holding-usd"
              label="Ciclo de Pagamento"
            />
          </MenuTree>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
