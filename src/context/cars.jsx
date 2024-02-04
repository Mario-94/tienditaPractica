import { useReducer, createContext } from "react";
import { cartInitialState, cartReducer } from "../reducers/card";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  const removeOneItemFromCart = (product) =>
    dispatch({
      type: "REMOVE_ONE_ITEM_FROM_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return { state, addToCart, removeFromCart, clearCart, removeOneItemFromCart };
}

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, removeOneItemFromCart, clearCart } =
    useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        removeOneItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
