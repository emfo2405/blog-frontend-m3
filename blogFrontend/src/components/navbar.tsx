import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import './Navbar.scss'


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const {user, logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header>
      <div className='menu'>
        <div className='bigMenu'>
            <ul>
            <li><NavLink className={({ isActive }) => isActive ? "navLink active" : "navLink"} to="/">Hem</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "navLink active" : "navLink"} to="/blog">Blogg</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "navLink active" : "navLink"} to="/admin">Admin</NavLink></li>
            <li id="logout-placement">{
              !user ? <NavLink className={({ isActive }) => isActive ? "navLink active logout" : "navLink logout"} to="/login">Logga in</NavLink> : <button className='logout' onClick={handleLogout}>Logga ut</button>
              }
              </li>
        </ul>
        </div>

        <div className='smallMenu'>
                {!menuOpen && (
                <span className="material-symbols-outlined menu-icon" onClick={toggleMenu}>menu</span>
                )}

                {menuOpen && (
                  <span className="material-symbols-outlined close-icon" onClick={toggleMenu}>close</span>
                )}

          {menuOpen &&(
     <ul className='smallMenuUl'>
            <li><NavLink className={({ isActive }) => isActive ? "navLink active" : "navLink"} to="/">Hem</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "navLink active" : "navLink"} to="/blog">Blogg</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "navLink active" : "navLink"} to="/admin">Admin</NavLink></li>
            <li id="logout-placement">{
              !user ? <NavLink className={({ isActive }) => isActive ? "navLink active logout" : "navLink logout"} to="/login">Logga in</NavLink> : <button className='logout' onClick={handleLogout}>Logga ut</button>
              }
              </li>
        </ul>            
          )}
          </div>

      </div>




      <img className='headerImg' src='/blogHeaderImg.jpg' alt='Bild av ett tåg som åker över en bro'></img>

    </header>
  )
}

export default Navbar