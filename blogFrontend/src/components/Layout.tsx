import Navbar from "./navbar"
import { Outlet } from "react-router-dom"


function Layout() {

  return (
<>
<Navbar />
<main>
<Outlet />
</main>
<footer>Emma Forsmalm, moment 3</footer>
</>
  )
}

export default Layout