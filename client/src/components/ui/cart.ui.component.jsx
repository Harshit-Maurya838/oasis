import React from 'react';
import "../../styles/utils/utils.styles.css";
import "../../styles/cart/main.cart.styles.css";
import CartItem from "../utils/cartItem.utils.component";

function Cart({items = [...Array(4)]}) {
  return (
    <div className='CartDom' >
        {
          items.map((item,index)=>{
            return(
                <CartItem title={"Luxe Armchair - Left Arm Chute"}
                desc={
                  "Ultra-functional and elegantly minimalist, our Luxe Armchair Collection draws inspiration from Nordic-style décor. It features a neutral color palette and natural wood accents, highlighted by uniquely designed hexagonal legs. "
                } 
                  price={288}
                  quantity={1}
                />
            )
          })
        }
    </div>
  )
}

export default Cart