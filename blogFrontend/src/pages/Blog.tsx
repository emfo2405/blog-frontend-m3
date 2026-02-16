import { useState } from 'react'
import { Outlet } from 'react-router-dom'


function Blog() {

  return (
    <>
    <h1>Välkommen till bloggen!</h1>
    <Outlet />
    </>
  )
}

export default Blog