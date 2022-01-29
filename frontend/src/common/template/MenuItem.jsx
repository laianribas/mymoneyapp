import React from 'react'
import { Link } from 'react-router-dom'
const MenuItem = (props) => {
  return (
    <li class="nav-item menu-open">
      <Link to={props.path} class="nav-link">
        <i class={`nav-icon ${props.icon}`}></i>
        <p>{props.label}</p>
      </Link>
    </li>
  )
}

export default MenuItem
