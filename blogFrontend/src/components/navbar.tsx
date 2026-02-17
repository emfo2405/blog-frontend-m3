import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';


function Navbar() {

  const {user, logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header>
        <ul>
            <li><NavLink to="/">Hem</NavLink></li>
            <li><NavLink to="/blog">Blogg</NavLink></li>
            <li><NavLink to="/admin">Admin</NavLink></li>
            <li>{
              !user ? <NavLink to="/login">Logga in</NavLink> : <button onClick={handleLogout}>Logga ut</button>
              }
              </li>
        </ul>
    </header>
  )
}

export default Navbar