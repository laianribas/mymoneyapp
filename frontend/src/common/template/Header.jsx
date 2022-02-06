import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './navBar'

const Header = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-dark">
        <div className="container-fluid d-flex justify-content-between">
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
          <NavBar />
        </div>
        {/* Left navbar links */}
      </nav>
    </div>
  )
}

export default Header
