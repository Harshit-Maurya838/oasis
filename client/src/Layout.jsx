import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/ui/footer.ui.component.jsx";
import Navbar from "./components/ui/navbar.ui.component.jsx";
import "./Layout.css";
import { SidePanelProvider, useSidePanel } from "./SidePanelContext.jsx";
import { AuthContextProvider } from "./AuthContext.jsx";
import SidePanel from "./components/ui/sidepanel.ui.component.jsx";
import LoginPage from "./components/ui/loginPage.ui.component.jsx";
import RegisterPage from "./components/ui/registerPage.ui.component.jsx";
import ResetPasswordPage from "./components/ui/resetPassword.ui.component.jsx";
import Cart from "./components/ui/cart.ui.component.jsx";
import CheckOutPage from "./components/ui/checkout.ui.component.jsx";
import PaymentPage from "./components/ui/payment.ui.component.jsx";
import { CartProvider } from "./CartContext.jsx";

const Layout = () => {
  return (
    <>
      <AuthContextProvider>
        <CartProvider>
          <SidePanelProvider>
            <Navbar />
            <section id="main-body">
              <Outlet />
            </section>
            <SidePanelWrapper />
            <Footer />
          </SidePanelProvider>
        </CartProvider>
      </AuthContextProvider>
    </>
  );
};

function SidePanelWrapper() {
  const { panel, closePanel } = useSidePanel();

  return (
    <SidePanel
      isActive={panel !== null}
      closePanel={closePanel}
      panelHeading={panel}
    >
      {panel === "Login" && <LoginPage />}
      {panel === "Sign Up" && <RegisterPage />}
      {panel === "Reset Password" && <ResetPasswordPage />}
      {panel === "Cart" && <Cart />}
      {panel === "Check Out" && <CheckOutPage />}
      {panel === "Payment" && <PaymentPage />}
    </SidePanel>
  );
}

export default Layout;
