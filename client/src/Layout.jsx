import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/ui/footer.ui.component.jsx'
import Navbar from './components/ui/navbar.ui.component.jsx'
import './Layout.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <section id="main-body">
        <Outlet />
      </section>
      <Footer />
    </>
  )
}

export default Layout