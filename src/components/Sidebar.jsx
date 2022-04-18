import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Sidebar() {
  return (
    <nav className="navbar navbar-dark bg-dark flex-column align-items-stretch text-light">
      <h5 >Side Navbar</h5>
      <nav className="nav nav-pills flex-column ">
        <NavLink to="/list" className={({isActive})=>`text-light mb-3 list-group-item ${(isActive?'active':'bg-dark')}`}>View article list</NavLink>
        <li><hr className="dropdown-divider"/></li>
        <NavLink to="/edit" className={({isActive})=>`text-light mb-3 list-group-item ${(isActive?'active':'bg-dark')}`}>Edit article</NavLink>
        <li><hr className="dropdown-divider"/></li>
        <NavLink to="/means" className={({isActive})=>`text-light mb-3 list-group-item ${(isActive?'active':'bg-dark')}`}>Edit Profile</NavLink>
      </nav>
    </nav>
  )
}
