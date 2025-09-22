import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "nav-icon active" : "nav-icon")}>
        <span className="material-icons">home</span>
      </NavLink>

      <NavLink to="/Menu" className={({ isActive }) => (isActive ? "nav-icon active" : "nav-icon")}>
        <span className="material-icons">menu</span>
      </NavLink>

      <NavLink to="/Search" className={({ isActive }) => (isActive ? "nav-icon active" : "nav-icon")}>
        <span className="material-icons">search</span>
      </NavLink>

      <NavLink to="/Chat" className={({ isActive }) => (isActive ? "nav-icon active" : "nav-icon")}>
        <span className="material-icons">chat</span>
      </NavLink>

      <NavLink to="/About" className={({ isActive }) => (isActive ? "nav-icon active" : "nav-icon")}>
        <span className="material-icons">info</span>
      </NavLink>

      <NavLink to="/Graph" className={({ isActive }) => (isActive ? "nav-icon active" : "nav-icon")}>
        <span className="material-icons">show_chart</span>
      </NavLink>

      <NavLink to="/Statistics" className={({ isActive }) => (isActive ? "nav-icon active" : "nav-icon")}>
        <span className="material-icons">bar_chart</span>
      </NavLink>

      <NavLink to="/User" className={({ isActive }) => (isActive ? "nav-icon active" : "nav-icon")}>
        <span className="material-icons">group</span>
      </NavLink>

      <NavLink to="/Setting" className={({ isActive }) => (isActive ? "nav-icon active" : "nav-icon")}>
        <span className="material-icons">settings</span>
      </NavLink>
    </aside>
  );
}
