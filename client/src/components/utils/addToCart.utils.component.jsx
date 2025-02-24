import React from "react";
import Button from "./button.utils.component";
import { io } from "socket.io-client";
import { useCart } from "../../CartContext";
import { useAuthContext } from "../../AuthContext";
import { useSidePanel } from "../../SidePanelContext";
import API from "../../axios.config";

const socket = io("http://localhost:8000");

const AddToCart = ({ productId }) => {
    const { authenticated } = useAuthContext(); 
    const { openPanel } = useSidePanel();
    const { setCart } = useCart(); 

    const addToCartAPI = async (productId, quantity = 1) => {
        try {
            const response = await API.post("/cart/add", { productId, quantity }, { withCredentials: true });
            socket.emit("cartUpdated", response.data);
            setCart(response.data.cart);
            alert("Item added to cart!"); 
        } catch (error) {
            console.error("Error adding to cart:", error);
            alert("Failed to add to cart.");
        }
    };

    const handleAddToCart = async () => {
        if (!authenticated) {
            return openPanel("Sign Up");
        }
        await addToCartAPI(productId);
    };

    return <Button onClick={handleAddToCart}>Add to cart</Button>;
};

export default AddToCart;
