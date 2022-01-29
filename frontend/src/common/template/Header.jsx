import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-dark">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="#" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
