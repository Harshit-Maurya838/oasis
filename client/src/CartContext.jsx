import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";
import { io } from "socket.io-client";
import API from "./axios.config";
import { useAuthContext } from "./AuthContext.jsx";

// Create cart context
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [isConnected, setIsConnected] = useState(false);
  
  const { authenticated, userId } = useAuthContext();
  const socketRef = useRef(null); // Store socket persistently

  // Fetch cart from backend
  const fetchCart = useCallback(async () => {
    try {
      const response = await API.get("/cart", { withCredentials: true });
      setCart(response.data || { cartItems: [] });
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  }, []);

  // Initialize socket only once
  useEffect(() => {
    console.log("Current userId:", userId); 
  
    if (!socketRef.current && userId) { 
      socketRef.current = io("http://localhost:8000", {
        autoConnect: false,
        withCredentials: true,
        auth: {
          userId: userId 
        }
      });
      console.log("Socket initialized with userId:", userId);
    }
  
    const socket = socketRef.current;
  
    if (authenticated && userId && socket) {
      if (!isConnected) {
        socket.auth = { userId }; // Update auth before connecting
        socket.connect();
        setIsConnected(true);
        console.log("Socket connected with userId:", userId);
      }
      
      fetchCart();
  
      const handleCartUpdate = (updatedCart) => {
        console.log("Cart updated via socket:", updatedCart);
        setCart(updatedCart);
      };
  
      socket.on("cartUpdated", handleCartUpdate);
  
      return () => socket.off("cartUpdated");
    } else if (isConnected) {
      socket.disconnect();
      setIsConnected(false);
      console.log("Socket disconnected");
      setCart({});
      console.log(cart);
    }
  }, [fetchCart, authenticated, userId]);
  

  const addToCart = (productId, quantity = 1) => {
    if (socketRef.current) {
      socketRef.current.emit("addToCart", { productId, quantity });
    }
  };

  const removeFromCart = (productId) => {
    if (socketRef.current) {
      socketRef.current.emit("removeFromCart", { productId });
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, socket: socketRef.current }}>
      {children}
    </CartContext.Provider>
  );
};
