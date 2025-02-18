import React, { useEffect, useRef, useState } from "react";
import oasisLogo from "/img/Oasis.svg";
import "../../styles/navbar/main.navbar.styles.css";
import "../../styles/utils/utils.styles.css";
import CartButton from "../utils/cardButton.utils.component";
import Button from "../utils/button.utils.component";
import { Link, NavLink } from "react-router-dom";
import { useSidePanel } from "../../SidePanelContext";
import UserProfile from "../utils/userprofile.utils.component";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 834);
  const [isLoggedIn , setLoggedIn] = useState(false);

  const { openPanel } = useSidePanel();
  // for hamburger
  const handleToggle = (e) => {
    setIsChecked(e.target.checked);
  };

  // check at every change for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 834);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav id="navbar">
      <div className="left">
        <a>
          <img src={oasisLogo} alt="" />
        </a>
      </div>
      {/* shows when mobile view will be there */}
      {isMobileView && (
        <label className="hamburger">
          <input type="checkbox" className="switcher" onChange={handleToggle} />
          <span className="hamburger_line"></span>
          <span className="hamburger_line"></span>
          <span className="hamburger_line"></span>
          <span className="hamburger_line"></span>
        </label>
      )}

      <div
        className="menu"
        style={{
          ...(isMobileView ? {
            transform: isChecked ? "translateY(20px)" : "translateY(-20px)",
            opacity: isChecked ? "1" : "0",
            transition: "transform 0.3s ease, opacity 0.3s ease"
          } : { opacity: 1 })
          ,
          ...(!isMobileView ? { display: "flex" } : { display: "flex" }),
        }}
      >
        <div className="center">
          <NavLink to="/home#hero" className={({isActive}) => isActive ? "active" : null}>Home</NavLink>
          <NavLink to="/shop" className={({isActive}) => isActive ? "active" : null}>Shop</NavLink>
          <NavLink to="/categories"  className={({isActive}) => isActive ? "active" : null}>Categories</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? "active" : null}>Blog</NavLink>
        </div>
        <div className="right">
          <CartButton cartItem={0} onClick={()=>{
            openPanel('Cart')
          }} />
          {
            isLoggedIn ? <Button variant="contained" onClick={() => openPanel("Sign Up")}>
            <p className="text-16-semibold">Get Started</p>
          </Button> :
          <UserProfile username={"Nikhil Hegde"} />
            }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
