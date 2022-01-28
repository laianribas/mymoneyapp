import React from 'react'

const MenuTree = (props) => {
  return (
    <li class="nav-item">
      <a href="#" class="nav-link">
        <i class={`nav-icon ${props.icon}`}></i>
        <p>
          {props.label}
          <i class="fas fa-angle-left right"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">{props.children}</ul>
    </li>
  )
}

export default MenuTree
