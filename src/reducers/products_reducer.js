import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions"

 const products_reducer= (state, action)=>{
    switch(action.type){
        case SIDEBAR_OPEN:
            {
                return { ...state, isSidebarOpen: action.payload };
            }; break;
        case SIDEBAR_CLOSE:
            {
                return { ...state, isSidebarOpen: action.payload };
            }; break;
        case GET_PRODUCTS_BEGIN:
            {
                return { ...state, products_loading: true };
            }; break;
        case GET_PRODUCTS_SUCCESS:
            {
                const featured= action.payload.filter((product)=> product.featured === true );
                return { ...state, products_loading: false,  products: action.payload, featured_products: featured };
            }; break;
        case GET_PRODUCTS_ERROR:
            {
                return { ...state, products_loading: false, products_error: true };
            }; break;
    };
};
export default products_reducer;