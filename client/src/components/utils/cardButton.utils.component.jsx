import React, { useEffect } from "react";
import cartImage from "/img/cart.svg";
import { useSidePanel } from "../../SidePanelContext";

const CartButton = ({ cartItem = 3, onClick, className }) => {
  const { openPanel } = useSidePanel();


  return (
    <a className={`cart ${className}`} onClick={onClick}>
      <img src={cartImage} alt="" />
      <div className="frame">{cartItem}</div>
    </a>
  );
};

export default CartButton;
