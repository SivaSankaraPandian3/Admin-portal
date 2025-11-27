import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Apply collapsed class to layout wrapper
  useEffect(() => {
    const layout = document.querySelector(".layout");
    if (collapsed) {
      layout.classList.add("sidebar-collapsed");
    } else {
      layout.classList.remove("sidebar-collapsed");
    }
  }, [collapsed]);

  return (
  <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}
     data-collapsed={collapsed}>


      {/* Collapse Button */}
      <button
        className="collapse-btn"
        onClick={() => setCollapsed(!collapsed)}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      {/* Logo */}
      <div className="sidebar-header">
        <img src="/logo.png" alt="logo" className="sidebar-logo" />
        {!collapsed && <h3 className="sidebar-title">Admin Portal</h3>}
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">

        <NavLink to="/overview" className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"
        }>
          <i className="bi bi-grid-fill"></i>
          {!collapsed && <span>Overview</span>}
        </NavLink>

        <NavLink to="/courses" className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"
        }>
          <i className="bi bi-book-half"></i>
          {!collapsed && <span>Courses</span>}
        </NavLink>

        <NavLink to="/enroll" className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"
        }>
          <i className="bi bi-person-plus-fill"></i>
          {!collapsed && <span>Enroll Student</span>}
        </NavLink>

        <NavLink to="/instructors" className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"
        }>
          <i className="bi bi-person-video3"></i>
          {!collapsed && <span>Instructors</span>}
        </NavLink>

        <NavLink to="/students" className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"
        }>
          <i className="bi bi-people-fill"></i>
          {!collapsed && <span>Students</span>}
        </NavLink>

        <NavLink to="/approve-users" className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"
        }>
          <i className="bi bi-person-check-fill"></i>
          {!collapsed && <span>Approve Users</span>}
        </NavLink>

        <div className="menu-divider"></div>

        <NavLink to="/sync" className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"
        }>
          <i className="bi bi-arrow-repeat"></i>
          {!collapsed && <span>Sync from Zen</span>}
        </NavLink>

        <NavLink to="/logout" className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"
        }>
          <i className="bi bi-box-arrow-right"></i>
          {!collapsed && <span>Logout</span>}
        </NavLink>

      </nav>

      {/* Profile */}
      <div className="sidebar-profile">
        <img src="/avatar.png" alt="user" className="profile-img" />
        {!collapsed && (
          <div>
            <p className="welcome-text">Welcome back 👋</p>
            <p className="profile-name">Johnathan</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
