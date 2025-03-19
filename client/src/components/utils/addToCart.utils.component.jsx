import React from "react";
import Button from "./button.utils.component";
import { io } from "socket.io-client";
import { useCart } from "../../CartContext";
import { useAuthContext } from "../../AuthContext";
import { useSidePanel } from "../../SidePanelContext";

const socket = io("http://localhost:8000", { autoConnect: false, withCredentials: true });

const AddToCart = ({ productId }) => {
    const { authenticated } = useAuthContext(); 
    const { openPanel } = useSidePanel();
    const { cart, setCart } = useCart(); 

    const handleAddToCart = async () => {
        if (!authenticated) {
            return openPanel("Sign Up");
        }

        socket.emit("addToCart", { productId, quantity: 1 });

        socket.once("cartUpdated", (updatedCart) => {
            setCart(updatedCart);
            alert("Item added to cart!"); 
        });
    };

    return <Button onClick={handleAddToCart}>Add to cart</Button>;
};

export default AddToCart;
