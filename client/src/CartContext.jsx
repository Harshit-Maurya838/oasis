import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import API from "./axios.config";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const socket = io("http://localhost:8000");

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null);

    // Fetch cart when component mounts
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await API.get("/cart", { withCredentials: true });
                setCart(response.data);
            } catch (error) {
                console.error("Error fetching cart:", error);
            }
        };
        fetchCart();

        // Listen for real-time cart updates
        socket.on("cartUpdated", (updatedCart) => {
            console.log("Cart updated via socket:", updatedCart);
            setCart(updatedCart); // 🔥 UPDATE CART STATE
        });

        return () => {
            socket.off("cartUpdated"); // Cleanup on unmount
        };
    }, []);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};
