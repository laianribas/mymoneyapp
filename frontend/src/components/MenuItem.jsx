import React from 'react'

const MenuItem = (props) => {
  return (
    <li class="nav-item menu-open">
      <a href={props.path} class="nav-link">
        <i class={`nav-icon ${props.icon}`}></i>
        <p>{props.label}</p>
      </a>
    </li>
  )
}

export default MenuItem
