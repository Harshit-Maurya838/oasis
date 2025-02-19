import React, { useEffect, useState } from "react";
import oasisLogo from "/img/Oasis.svg";
import "../../styles/navbar/main.navbar.styles.css";
import "../../styles/utils/utils.styles.css";
import CartButton from "../utils/cardButton.utils.component";
import Button from "../utils/button.utils.component";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSidePanel } from "../../SidePanelContext";
import UserProfile from "../utils/userprofile.utils.component";
import { useAuthContext } from "../../AuthContext";

const sections = ["hero", "categories_main", "faq"];

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 834);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { openPanel } = useSidePanel();
  const { authenticated, username } = useAuthContext();
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (id) => {
    if (location.pathname !== "/home") {
      navigate("/home"); // First navigate to the homepage
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300); // Delay to ensure the page loads before scrolling
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          ...(isMobileView
            ? {
                transform: isChecked ? "translateY(20px)" : "translateY(-20px)",
                opacity: isChecked ? "1" : "0",
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }
            : { opacity: 1 }),
          ...(!isMobileView ? { display: "flex" } : { display: "flex" }),
        }}
      >
        <div className="center">
          <NavLink
            to="/home#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("hero");
            }}
            className={activeSection === "hero" ? "active" : ""}
          >
            Home
          </NavLink>

          <NavLink
            to="/home#categories_main"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("categories_main");
            }}
            className={activeSection === "categories_main" ? "active" : ""}
          >
            Categories
          </NavLink>

          <NavLink
            to="/home#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("hero");
            }}
            className={activeSection === "hero" ? "active" : ""}
          >
            Shop
          </NavLink>

          <NavLink
            to="/home#faq"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("faq");
            }}
            className={activeSection === "faq" ? "active" : ""}
          >
            Faq
          </NavLink>
        </div>
        <div className="right">
          <CartButton
            cartItem={0}
            onClick={() => {
              openPanel("Cart");
            }}
          />
          {!authenticated ? (
            <Button variant="contained" onClick={() => openPanel("Sign Up")}>
              <p className="text-16-semibold">Get Started</p>
            </Button>
          ) : (
            <UserProfile username={username} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
