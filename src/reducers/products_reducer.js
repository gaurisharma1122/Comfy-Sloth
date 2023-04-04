import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions"

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
    }
}
export default products_reducer