import { createContext, useContext, useEffect, useReducer } from "react";
import { cart_reducer } from "../reducers/cart_reducer";
import { ADD_TO_CART, CLEAR_CART, COUNT_CART_TOTALS, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT } from "../actions";

const CartContext = createContext();

const getLocalStorage = () => {
    let cart = localStorage.getItem("cartItems");
    if (cart) {
        return JSON.parse(localStorage.getItem("cartItems"));
    }
    else {
        return [];
    }
};

const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 50
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cart_reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
    };
    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };
    const removeItem = (id) => {
        dispatch({ type: REMOVE_CART_ITEM, payload: id });
    };
    const toggleAmount = (id, value) => {
        dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
    };

    useEffect(() => {
        dispatch({ type: COUNT_CART_TOTALS });
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ state, dispatch, addToCart, clearCart, removeItem, toggleAmount }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;

export const useCartContext = () => {
    return useContext(CartContext);
};