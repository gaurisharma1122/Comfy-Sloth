import { createContext, useContext, useEffect, useReducer } from "react";
import { filter_reducer } from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";
import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, UPDATE_SORT } from "../actions";

const FilterContext= createContext();

const initialState= {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest'
};

const FilterProvider= ({ children })=>{
    //grabbing all products from products context
    const { state:productsState }= useProductsContext();
    const { products }= productsState;
    const [state, dispatch]= useReducer(filter_reducer, initialState);

    const set_gridview= ()=>{
        dispatch({ type: SET_GRIDVIEW });
    };
    const set_listview= ()=>{
        dispatch({ type: SET_LISTVIEW });
    };
    const updateSort= (e)=>{
        const name= e.target.name;
        const value= e.target.value;
        dispatch({ type: UPDATE_SORT, payload: value });
    };

    useEffect(()=>{
        dispatch({ type: LOAD_PRODUCTS, payload: products });
    }, [products]);

    return (
        <FilterContext.Provider value={{ state, dispatch, set_gridview, set_listview, updateSort }}>
            { children }
        </FilterContext.Provider>
    );
};
export default FilterProvider;

export const useFilterContext= ()=>{
    return useContext(FilterContext);
};
 