import React from 'react'
import oasisLogo from "/img/Oasis.svg";
import "../styles/navbar.ui.styles.css";
import CartButton from '../utils/cardButton.utils.component';
import Button from '../utils/button.utils.component';
import ArrowRightIcon from "../icons/arrowRight.icon.component.jsx";

const Navbar = () => {
  return (
    <nav id="navbar">
        <div className="left">
            <a><img src={oasisLogo} alt="" /></a>
        </div>
        <div className="center">
            <a href="/home">Home</a>
            <a href="/Shop">Shop</a>
            <a href="/Categories">Categories</a>
            <a href="">Blog</a>
        </div>
        <div className="right">
            <CartButton cartItem={0} />
            <Button variant='contained'>Get Started <ArrowRightIcon width={24} fill={"white"} /></Button>
        </div>
    </nav>
  )
}

export default Navbar
