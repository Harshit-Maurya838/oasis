import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { io } from "socket.io-client";
import API from "./axios.config";
import { useAuthContext } from "./AuthContext.jsx";

// Create Cart Context
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const { authenticated, email } = useAuthContext();
  // Initialize socket connection but don't connect immediately
  const socket = io("http://localhost:8000", {
    autoConnect: false, // Prevents connecting before login
    withCredentials: true,
    auth: {
      email: email,
    },
  });

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
    if (authenticated) {
      if (!isConnected) {
        socket.connect();
        setIsConnected(true);
        console.log("Socket connect");
      }

      // Fetch initial cart data
      fetchCart();

      // Listen for real-time cart updates
      socket.on("cartUpdated", (updatedCart) => {
        console.log("Cart updated via socket:", updatedCart);
        setCart(updatedCart);
      });
    } else {
      socket.disconnect();
    }

    return () => {
      socket.off("cartUpdated");
    };
  }, [fetchCart, isConnected, authenticated]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
