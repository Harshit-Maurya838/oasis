import React from 'react'
import cartImage from "/img/cart.svg";

const CartButton = ({cartItem = 0}) => {
  return (
    <a className="cart">
        <img src={cartImage} alt="" />
        <div className="frame">{cartItem}</div>
    </a>
  )
}

export default CartButton
