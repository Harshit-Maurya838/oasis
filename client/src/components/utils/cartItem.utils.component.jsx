import React from "react";
import "../../styles/utils/utils.styles.css";
import "../../styles/utils/cartitem.utils.styles.css";

function CartItem({ title, price, desc, quantity, variants = ['red' , 'blue' , 'green'] , image}) {
  return (
    <div className="CartItemDom">
      <div className="CartItemImage">
        <img src="/img/productDetail(temp)/PD_1.png" alt="item-image" />
      </div>
      <div className="CartItemContent">
        <div className="CartItemInfo">
          <div className="CartItemHeader">
            <span className="text-16-semibold">{title}</span>
          </div>
          <div className="CartItemDesc">
            <span className="text-14-regular">{desc}</span>
          </div>
        </div>
        <div className="CartItemPrice">
          <span className="text-20-semibold">${price}</span>
        </div>
        <div className="CartItemOptions">
          <div className="CartItemVariants">{
              variants.map((variant,index)=>{
                return(
                  <div className={`CartItemVariant ${
                    index == 2 ? 'CartItemActiveVariant':''
                  }`} key={index} style={{backgroundColor:variant || variants[index]}} />
                )
              })
            }</div>
          <div className="CartItemQuantity">
            <span className="text-20-regular" >{quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
