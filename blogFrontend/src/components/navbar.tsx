import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


function Navbar() {

  const {user} = useAuth();

  return (
    <header>
        <ul>
            <li><NavLink to="/">Hem</NavLink></li>
            <li><NavLink to="/blog">Blogg</NavLink></li>
            <li><NavLink to="/admin">Admin</NavLink></li>
            <li>{
              !user ? <NavLink to="/login">Logga in</NavLink> : <button>Logga ut</button>
              }
              </li>
        </ul>
    </header>
  )
}

export default Navbar