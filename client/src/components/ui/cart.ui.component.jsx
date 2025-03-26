import React, { useEffect } from "react";
import "../../styles/utils/utils.styles.css";
import "../../styles/cart/main.cart.styles.css";
import CartItem from "../utils/cartItem.utils.component";
import { useSidePanel } from "../../SidePanelContext";
import { useCart } from "../../CartContext";

function Cart({ items = [...Array(4)] }) {
  const { openPanel } = useSidePanel();
  const { cart } = useCart();
  items = cart.cartItems;
  
  useEffect(()=>{
    items = cart.cartItems;
  },[cart])

  return (
    <div className="CartDom">
      {items.map((item, index) => {
        return (
          <CartItem
            title={item.product.name}
            desc={item.product.description}
            image={item.product.variants[0].var_gallery[0]}
            price={(item.product.price - item.product.price * (item.product.discount / 100)).toFixed(2) * item.quantity}
            quantity={item.quantity}
            variants={[`${item.product.variants[0].var_color}`,`${item.product.variants[1].var_color}`]}
            productId={item.product._id}
          />
        );
      })}
      <div
        className="CartDomNavigation"
        onClick={() => {
          openPanel("Check Out");
        }}
      >
        <span className="text-20-regular">Next</span>
      </div>
    </div>
  );
}

export default Cart;
