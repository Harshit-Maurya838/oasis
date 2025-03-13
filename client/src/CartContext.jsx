import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { io } from "socket.io-client";
import API from "./axios.config";

// Create Cart Context
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

// Initialize socket connection but don't connect immediately
const socket = io("http://localhost:8000", {
    autoConnect: false, // Prevents connecting before login
    withCredentials: true,
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    // Fetch cart from backend
    const fetchCart = useCallback(async () => {
        try {
            const response = await API.get("/cart", { withCredentials: true });
            setCart(response.data);
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    }, []);

    useEffect(() => {
        // Connect only if not already connected
        if (!isConnected) {
            socket.connect();
            setIsConnected(true);
        }

        // Fetch initial cart data
        fetchCart();

        // Listen for real-time cart updates
        socket.on("cartUpdated", (updatedCart) => {
            console.log("Cart updated via socket:", updatedCart);
            setCart(updatedCart);
        });

        return () => {
            socket.off("cartUpdated");
        };
    }, [fetchCart, isConnected]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};
