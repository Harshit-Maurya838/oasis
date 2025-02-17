import React from 'react'
import cartImage from "/img/cart.svg";
import { useSidePanel } from '../../SidePanelContext';

const CartButton = ({cartItem = 0 , onClick}) => {
  const { openPanel } = useSidePanel();
  return (
    <a className="cart" onClick={onClick}>
        <img src={cartImage} alt="" />
        <div className="frame">{cartItem}</div>
    </a>
  )
}

export default CartButton
