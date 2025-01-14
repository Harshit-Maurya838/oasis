import React from 'react'
import oasisLogo from "/img/Oasis.svg";
import "../../styles/navbar/main.navbar.styles.css";
import '../../styles/utils/utils.styles.css'
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
            <Button variant='contained'><p className='text-16-semibold' >Get Started</p> </Button>
        </div>
    </nav>
  )
}

export default Navbar
