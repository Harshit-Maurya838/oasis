import React from 'react'
import cartImage from "/img/cart.svg";
import { useSidePanel } from '../../SidePanelContext';

const CartButton = ({cartItem = 0}) => {
  const { openPanel } = useSidePanel();
  return (
    <a className="cart">
        <img src={cartImage} alt="" />
        <div className="frame">{cartItem}</div>
    </a>
  )
}

export default CartButton
