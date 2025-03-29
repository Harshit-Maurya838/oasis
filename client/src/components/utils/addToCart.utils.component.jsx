import React from "react";
import Button from "./button.utils.component";
import { io } from "socket.io-client";
import { useCart } from "../../CartContext";
import { useAuthContext } from "../../AuthContext";
import { useSidePanel } from "../../SidePanelContext";


const AddToCart = ({ product }) => {
    const { authenticated } = useAuthContext(); 
    const { openPanel } = useSidePanel();
    const { cart, setCart, socket, addToCart } = useCart(); 
    const quantity = 1; // Default quantity, can be changed later

    const handleAddToCart = async () => {
        if (!authenticated) {
            return openPanel("Sign Up");
        }
        if (!socket.connected) {
            socket.connect();
        }
        console.log("Emitting addToCart for product:", product);
        
        addToCart(product, quantity);
        
    };

    return <Button onClick={handleAddToCart}>Add to cart</Button>;
};

export default AddToCart;
