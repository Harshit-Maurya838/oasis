import React from 'react'
import oasisLogo from "/img/Oasis.svg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../styles/navbar.ui.styles.css";
import { Button } from '@mui/material';
import CartButton from '../utils/cardButton.utils.component';

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
            <Button variant="contained" className='get_started'> Get Started <ArrowForwardIcon /></Button>
        </div>
    </nav>
  )
}

export default Navbar
