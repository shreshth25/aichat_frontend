import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" className="brand-link">
      <img
        src="download.png"
        alt="AdminLTE Logo"
        className="brand-image img-circle elevation-3"
        style={{ opacity: ".8" }}
      />
      <span className="brand-text font-weight-light">Rikatm AI</span>
    </a>
    <div className="sidebar">
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
        <li className="nav-item">
        <NavLink to="/" className="nav-link">
          <i className="far fa-circle nav-icon" />
          <p>New Chat</p>
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/emotion" className="nav-link">
          <i className="far fa-circle nav-icon" />
          <p>Emotion Analyzer</p>
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/story" className="nav-link">
          <i className="far fa-circle nav-icon" />
          <p>Story Teller</p>
        </NavLink>
        </li>
        </ul>
      </nav>
    </div>
  </aside>
  )
}

export default Sidebar
