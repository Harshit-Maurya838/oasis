import React from "react";
import Button from "./button.utils.component";
import { io } from "socket.io-client";
import { useCart } from "../../CartContext";
import { useAuthContext } from "../../AuthContext";
import { useSidePanel } from "../../SidePanelContext";


const AddToCart = ({ productId }) => {
    const { authenticated } = useAuthContext(); 
    const { openPanel } = useSidePanel();
    const { cart, setCart, socket } = useCart(); 

    const handleAddToCart = async () => {
        if (!authenticated) {
            return openPanel("Sign Up");
        }
        if (!socket.connected) {
            socket.connect();
        }
        console.log("Emitting addToCart for product:", productId);
    
        socket.emit("addToCart", { product: productId, quantity: 1 });
    
        socket.on("cartUpdated", (updatedCart) => {
            console.log("Cart updated:", updatedCart);
            setCart(updatedCart);
        });
    };

    return <Button onClick={handleAddToCart}>Add to cart</Button>;
};

export default AddToCart;
