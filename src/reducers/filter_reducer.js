import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, UPDATE_SORT } from "../actions";

export const filter_reducer= (state, action)=>{
    switch(action.type){
        case LOAD_PRODUCTS:
            {
                return { ...state, all_products: action.payload, filtered_products: action.payload };
            };
            break;
        case SET_GRIDVIEW:
            {
                return { ...state, grid_view: true };
            };
            break;
        case SET_LISTVIEW:
            {
                return { ...state, grid_view: false };
            };
            break;
        case UPDATE_SORT:
            {
                return { ...state, sort: action.payload };
            };
            break;
    }
};