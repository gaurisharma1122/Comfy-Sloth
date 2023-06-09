import { FILTER_PRODUCTS, LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, SORT_PRODUCTS, UPDATE_FILTERS, UPDATE_SORT } from "../actions";

export const filter_reducer = (state, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            {
                let prices = action.payload.map((p) => p.price);
                let maxPrice = Math.max(...prices);
                return {
                    ...state, all_products: action.payload, filtered_products: action.payload,
                    filters: { ...state.filters, max_price: maxPrice, price: maxPrice }
                };
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
        case SORT_PRODUCTS:
            {
                const { sort, filtered_products } = state;
                let tempProducts = [...filtered_products];
                if (sort === 'price-lowest') {
                    tempProducts = tempProducts.sort((a, b) => a.price - b.price);
                }
                if (sort === 'price-highest') {
                    tempProducts = tempProducts.sort((a, b) => b.price - a.price);
                }
                if (sort === 'name-a') {
                    tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
                }
                if (sort === 'name-z') {
                    tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
                }
                return { ...state, filtered_products: tempProducts };
            };
            break;
        case UPDATE_FILTERS:
            {
                const { name, value } = action.payload;
                return { ...state, filters: { ...state.filters, [name]: value } };
            };
            break;
        case FILTER_PRODUCTS:
            {
                
                return { ...state }
            }
    }
};