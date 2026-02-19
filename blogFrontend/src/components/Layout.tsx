import Navbar from "./navbar"
import { Outlet } from "react-router-dom"
import './Layout.scss'

function Layout() {

  return (
<>
<Navbar />
<main>
<Outlet />
</main>
<footer>Emma Forsmalm <br /> Moment 3</footer>
</>
  )
}

export default Layout