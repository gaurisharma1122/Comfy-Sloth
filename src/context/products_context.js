import { createContext, useContext, useReducer } from "react";
import products_reducer from "../reducers/products_reducer";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";

const ProductsContext= createContext();

const initialState= {
    isSidebarOpen: false,
}

const ProductsProvider= ({ children })=>{
    const [state, dispatch]= useReducer(products_reducer, initialState);

    const openSidebar= ()=>{
        dispatch({ type: SIDEBAR_OPEN, payload: true });
    };
    const closeSidebar= ()=>{
        dispatch({ type: SIDEBAR_CLOSE, payload: false });
    };

    return (
        <ProductsContext.Provider value={ {state, dispatch, openSidebar, closeSidebar} }>
            { children }
        </ProductsContext.Provider>
    );
};
export default ProductsProvider;

export const useProductsContext= ()=>{
    return useContext(ProductsContext);
}