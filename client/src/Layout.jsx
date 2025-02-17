import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/ui/footer.ui.component.jsx'
import Navbar from './components/ui/navbar.ui.component.jsx'
import './Layout.css'
import { SidePanelProvider, useSidePanel } from './SidePanelContext.jsx'
import SidePanel from './components/ui/sidepanel.ui.component.jsx'
import LoginPage from './components/ui/loginPage.ui.component.jsx'
import RegisterPage from './components/ui/registerPage.ui.component.jsx'
import ResetPasswordPage from './components/ui/resetPassword.ui.component.jsx'
import Cart from './components/ui/cart.ui.component.jsx'

const Layout = () => {
  return (
    <>
      <SidePanelProvider>
        <Navbar />
        <section id="main-body">
          <Outlet />
        </section>
        <SidePanelWrapper />
        <Footer />
      </SidePanelProvider>
    </>
  )
}

function SidePanelWrapper() {
  const { panel, closePanel } = useSidePanel();

  return (
    <SidePanel
      isActive={panel !== null}
      closePanel={closePanel}
      panelHeading={panel === "login" ? "Login" : panel === "signup"}
    >
      {panel === "login" && <Cart />}
      {panel === "signup" && <RegisterPage />}
      {panel === "resetPass" && <ResetPasswordPage />}
      {panel === "cart" && <Cart />}
    </SidePanel>
  );
}

export default Layout