import { createContext, useContext, useEffect, useReducer } from "react";
import products_reducer from "../reducers/products_reducer";
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT_BEGIN, SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";
import { products_url } from "../utils/constants";
import { GET_PRODUCTS_BEGIN } from "../actions";
import { GET_SINGLE_PRODUCT_ERROR } from "../actions";
import { GET_SINGLE_PRODUCT_SUCCESS } from "../actions";

const ProductsContext= createContext();

const initialState= {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {}
};

const ProductsProvider= ({ children })=>{

    const [state, dispatch]= useReducer(products_reducer, initialState);

    const openSidebar= ()=>{
        dispatch({ type: SIDEBAR_OPEN, payload: true });
    };
    const closeSidebar= ()=>{
        dispatch({ type: SIDEBAR_CLOSE, payload: false });
    };
    const fetchProducts= (url)=>{
        dispatch({ type: GET_PRODUCTS_BEGIN });
        fetch(url)
        .then(response=> response.json())
        .then(respData=> {
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload:respData });
        })
        .catch(error=> {
            dispatch({ type: GET_PRODUCTS_ERROR });
        })
        ;
    };
    const fetchSingleProduct= (url)=>{
        dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
        fetch(url)
        .then(response=> response.json())
        .then(respData=> {
            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: respData });
        })
        .catch(error=>{
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
        })
    };

    useEffect(()=>{
        fetchProducts(products_url);
    }, []);

    return (
        <ProductsContext.Provider value={ {state, dispatch, openSidebar, closeSidebar, fetchSingleProduct} }>
            { children }
        </ProductsContext.Provider>
    );
};
export default ProductsProvider;

export const useProductsContext= ()=>{
    return useContext(ProductsContext);
}