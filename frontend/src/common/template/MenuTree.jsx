import React from 'react'

const MenuTree = (props) => {
  return (
    <li className="nav-item">
      <a href="#" className="nav-link">
        <i className={`nav-icon ${props.icon}`}></i>
        <p>
          {props.label}
          <i className="fas fa-angle-left right"></i>
        </p>
      </a>
      <ul className="nav nav-treeview">{props.children}</ul>
    </li>
  )
}

export default MenuTree
