import React from 'react'
import { Link } from 'react-router-dom'
const MenuItem = (props) => {
  return (
    <li className="nav-item menu-open">
      <Link to={props.path} className="nav-link">
        <i className={`nav-icon ${props.icon}`}></i>
        <p>{props.label}</p>
      </Link>
    </li>
  )
}

export default MenuItem
