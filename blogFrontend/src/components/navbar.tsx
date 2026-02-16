import { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {

  return (
    <header>
        <ul>
            <li><NavLink to="/">Hem</NavLink></li>
            <li><NavLink to="/admin">Admin</NavLink></li>
            <li><NavLink to="/login">Logga in</NavLink></li>
        </ul>
    </header>
  )
}

export default Navbar